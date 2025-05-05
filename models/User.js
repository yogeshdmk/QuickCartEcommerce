import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{type : String,requred:true},
    name:{type : String,requred:true},
    email:  {type : String,requred:true,unique:true},
    imageUrl :{type : String,requred:true},
    cartItems:{type:Object,default:{}}

},{minimize:false})

const User = mongoose.models ||  mongoose.model('user',userSchema)

export default User