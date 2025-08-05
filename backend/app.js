import express from 'express'
import userRoute from './routers/userRouter.js';
import mongoose from 'mongoose';
import recipyRoute from './routers/recipyRouter.js';
import cors from 'cors'
const app=express()
app.use(express.static('public'))
app.use(cors())

app.listen(1234,()=>{
    console.log('run😄😄!!!!!!!!!');
})


  

app.use('/users',userRoute)
app.use('/recipy',recipyRoute)
mongoose.connect('mongodb://0.0.0.0:27017/DBRecipyProject')
.then(x=>{
    console.log("connect!!!");
})
.catch(l=>{
    console.log("err");
})