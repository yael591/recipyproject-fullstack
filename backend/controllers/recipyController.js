import mongoose from "mongoose"
import recipyModel from "../model/recipyModel.js"
import userModel from "../model/userModel.js"

const recipyController={
    //שליפת כל המתכונים
   getAll:(req,res)=>{
      try{
        recipyModel.find()
        .then((dataRecipy)=>{
            res.status(200).json(dataRecipy)
        }).catch((err)=>{
            res.status(500).json(err.message)
        })
      }
      catch(eror){
        res.status(500).json(eror)
      }
   } ,
   //הוספת מתכון
  
    addRecipy :async (req, res) => {
     try {
       const { recipyUserId } = req.body;
   
       // ודא ש-ID הוא ObjectId תקני
       if (!mongoose.Types.ObjectId.isValid(recipyUserId)) {
         return res.status(400).json({ error: 'recipyUserId לא תקין' });
       }
   
       // בדיקה שהמשתמש קיים
       const user = await userModel.findById(recipyUserId);
       if (!user) {
         return res.status(404).json({ error: 'משתמש לא נמצא' });
       }
   
       // יצירת מתכון חדש
       const newRecipy = new recipyModel({
         ...req.body,
         recipyUserId: new mongoose.Types.ObjectId(recipyUserId) // המרה ל-ObjectId
       });
   
       const result = await newRecipy.save();
       res.status(201).json({ message: 'המתכון נוסף בהצלחה', recipy: result });
   
     } catch (err) {
       res.status(500).json({ error: 'שגיאה כללית', details: err.message });
     }
   }
   ,
   
   //עריכת מתכון
   patchRecipy:(req,res)=>{
    const recipyId = req.params.id;
    const updateData = req.body;
      recipyModel.findByIdAndUpdate(recipyId, updateData, { new: true, runValidators: true })
        .then(updated => {
          if (!updated) {
            return res.status(404).json({ error: 'מתכון לא נמצא' });
          }
          res.status(200).json({ message: 'המתכון עודכן בהצלחה', recipy: updated });
        })
        .catch(updateErr => {
          res.status(400).json({ error: 'שגיאה בעדכון המתכון: ' + updateErr.message });
        })
   },
   //שליפת מתכון על פי קוד
   getRecipyById:(req,res)=>{
      try{
        recipyModel.findById(req.params._id)
        .then(recipy=>{
            res.status(200).send(recipy)
        })
        .catch(err=>{
          res.status(500).send(err.message)
        }
        )
      }
      catch(error){
        res.status(500).send(error)
      }
   },

//מחיקת מתכון
deleteRecipy: (req, res) => {
  const { recipyId, passUser } = req.params;

  recipyModel.findById(recipyId)
    .then(recipy => {
      if (!recipy) {
        return res.status(404).json({ error: 'המתכון לא נמצא' });
      }

      userModel.findOne({ passUser })
        .then(user => {
          if (!user) {
            return res.status(401).json({ error: 'סיסמה שגויה או משתמש לא קיים' });
          }

          const isOwner = user._id.toString() === recipy.recipyUserId.toString();
          const isManager = user.isManager;

          if (!isOwner && !isManager) {
            return res.status(403).json({ error: 'אין הרשאה למחוק מתכון זה' });
          }

          recipyModel.findByIdAndDelete(recipyId)
            .then(() => {
              return res.status(200).json({ message: 'המתכון נמחק בהצלחה' });
            })
            .catch(err => {
              return res.status(500).json({ error: 'שגיאה במחיקה: ' + err.message });
            });
        })
        .catch(err => {
          return res.status(500).json({ error: 'שגיאה באימות המשתמש: ' + err.message });
        });
    })
    .catch(err => {
      return res.status(500).json({ error: 'שגיאה באיתור המתכון: ' + err.message });
    });
}


}


export default recipyController