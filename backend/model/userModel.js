import mongoose from "mongoose";
const userModel = mongoose.Schema({
    nameUser: {
        type: String,
        required: true
    },
    passUser: {
        type: String,
        required: true
    }
    ,
    phoneUser: {
        type: String,
        required: true
    }
    ,
    addressUser: {
        type: String,
        required: true
    }
    ,
    isManager: {
        type: Boolean,
        required: true
    },
    myRecipies: {
        type: [String],
        required: true
    }
})

export default mongoose.model('userCollection', userModel)