import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email:{
        type:String,
        required:true,
    },
    number:{
        type: Number,
        default:9999999999,
    },
    password:{
        type:String ,
        required: true,
        minLength: 8
    },
    isAdmin:{
        type: Boolean,
        required:true,
        default: false
    }
});

const User  = mongoose.model("User",userSchema);

export default User;