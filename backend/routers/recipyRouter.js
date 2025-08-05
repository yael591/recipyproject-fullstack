import bodyParser from "body-parser"
import { Router } from "express"
import recipyController from "../controllers/recipyController.js"


const recipyRoute=Router()
recipyRoute.use(bodyParser.json())
recipyRoute.get('/getAllRecipies',recipyController.getAll)
recipyRoute.post('/addRecipy',recipyController.addRecipy)
recipyRoute.post('/postRecipy/:id',recipyController.patchRecipy)
recipyRoute.get('/getRecipyById/:_id',recipyController.getRecipyById)
recipyRoute.delete('/deleteRecipyById/:recipyId/:passUser',recipyController.deleteRecipy)

export default recipyRoute
