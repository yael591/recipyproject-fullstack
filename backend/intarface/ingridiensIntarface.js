import mongoose from "mongoose";

export const ingridiensSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  quantity: {
    type: String,
    require: true
  }
  
});