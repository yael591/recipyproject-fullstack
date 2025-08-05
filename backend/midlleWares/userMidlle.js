import fs from 'fs'
 
const userMidlleWare={
    writeUserToFile:(req,res,next)=>{
        try {
            const userLog = {
              nameUser: req.body.nameUser,
              passUser: req.body.passUser,
              date: new Date().toLocaleDateString('he-IL')
            };
      
            fs.appendFileSync('./useradded.txt', JSON.stringify(userLog) + '\n');
            next();
          } catch (err) {
            console.error('שגיאה ברישום לקובץ:', err);
            next(); // גם במקרה של שגיאה נמשיך הלאה (אפשר גם להחזיר שגיאה אם נדרש)
          }
    }
} 

export default userMidlleWare