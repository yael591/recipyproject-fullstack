import recipyModel from "../model/recipyModel.js"
import userModel from "../model/userModel.js"

const userControler={
    //שליפת כל המשתמשים
    getAll:(req,res)=>{
        try{
            userModel.find()
            .then((dataUser)=>{
                res.status(200).json(dataUser)
            }).catch((err)=>{
                res.status(500).json(err.message)
            })
        }
        catch(eror){
          res.status(500).json(eror)
        }
    }

   ,
   //הוספת משתמש
   addUser: (req, res) => {
    try {
      const user = new userModel(req.body);
      user.save()
        .then(() => {
          res.status(201).json(true); // 201 = נוצר בהצלחה
        })
        .catch(err => {
          res.status(400).json({ error: err.message }); // שליחה של שגיאה
        });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
},  
   //שליפת משתמש ע"י שם וסיסמא
   getById:(req,res)=>{
    const { nameUser, passUser } = req.body
    userModel.findOne({ nameUser, passUser })
        .then(user => {
            if (!user) {
                res.status(500).json("didnt find");
            } else {
                res.status(200).json(user);
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
},

//הוספת מתכון למערך המתכונים האהובים
   addRecipyToMyList:(req,res)=>{
    const { _id, recipyName } = req.body;

    if (!_id || !recipyName) {
      return res.status(400).json({ message: 'Missing userId or recipeName' });
    }
  
    // קודם נבדוק שהמתכון קיים במסד הנתונים הכללי
    recipyModel.findOne({ recipyName: recipyName })
      .then(recipe => {
        if (!recipe) {
          return res.status(404).json({ message: 'Recipe not found in the global collection' });
        }
  
        
        // שליפת המשתמש
        return userModel.findById(_id)
          .then(user => {
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
  
            // בדיקה אם המתכון כבר ברשימת האהובים
            if (user.myRecipies.includes(recipyName)) {
              return res.status(400).json({ message: 'Recipe already exists in user\'s list' });
            }
  
            // הוספה ושמירה
            user.myRecipies.push(recipyName);
            return user.save()
              .then(updatedUser => {
                res.status(200).json({ message: 'Recipe added to user\'s list', user: updatedUser });
              });
          });
      })
      .catch(error => {
        console.error('Error adding recipe:', error);
        res.status(500).json({ message: 'Something went wrong', error });
      });
  
   },

//החזרת שמות המתכונים שהלקוח אוהב
allNameRecipies:(req,res)=>{


   
    const  _id  = req.params._id;
    if (!_id) {
        return res.status(400).json({ message: 'Missing userId' });
    }
    userModel.findById(_id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            // מחזיר רק את מערך המתכונים
            res.status(200).json({ recipes: user.myRecipies });
        })
        .catch(error => {
            res.status(500).json({ message: 'Something went wrong', error });
        });

},



}
export default userControler