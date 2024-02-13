import mongoose, { model } from "mongoose";

const ProductShema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        details:{
            type:String,
            required:true
        },
     rating:{
            type:String,
            required:true
        }
    }


)
const UserModel = mongoose.model("Products",ProductShema)
export default UserModel