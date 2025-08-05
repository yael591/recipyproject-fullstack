import mongoose from "mongoose";
import { ingridiensSchema } from "../intarface/ingridiensIntarface.js";
import recipyValidate from "../validators/recipyValidate.js";

const recipyModel=mongoose.Schema({

     recipyName:{
        type:String,
        required:true
     },
     recipyPic:{
        type:String,
        required:false
     },
     recipyLevel:{
        type:String,
        required:false,
        validate:{
            validator:(value)=>recipyValidate.checkLevel(value)
        }
     },
     recipyTime:{
        type:String,
        required:false
     },
     recipySort:{
        type:String,
        required:true,
        validate:{
            validator:(val)=>recipyValidate.checkSort(val)
        }
     },
     recipyUserId:{
      type: mongoose.Types.ObjectId,
        ref:'userCollection'
     },
     ingredients:{
        type:[ingridiensSchema],
        required:true
     },

     
     


})


export default mongoose.model('recipyCollection',recipyModel)