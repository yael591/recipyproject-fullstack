import bodyParser from "body-parser";
import { Router } from "express";
import userControler from "../controllers/userController.js";
import userMidlleWare from "../midlleWares/userMidlle.js";

const userRoute=Router()
userRoute.use(bodyParser.json())
userRoute.get('/getAllUsers',userControler.getAll)
userRoute.post('/addUser',userMidlleWare.writeUserToFile,userControler.addUser)
userRoute.post('/getById',userControler.getById)
userRoute.post('/addRecipyToMyRecipies',userControler.addRecipyToMyList)
userRoute.get('/getAllNameRecipies/:_id',userControler.allNameRecipies)



export default userRoute