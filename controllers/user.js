import User from "../models/useModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
//description - to fetch all users
// method - Get/api/users
// access - Public
const getUsers = async(req,res) => {
    try {
        let users = await User.find();
        res.status(200).send({
            count: users.length,
            data: users
        });
    } catch (error) {
        res.send({error: error.message});
    }
};


//description - to fetch user by Id
// method - Get/api/users
// access - Public
const getUserById = async(req,res) => {
    try {
        let {_id} = req.params
        let users = await User.find({_id});
        res.status(200).send({
            data: users
        });
    } catch (error) {
        res.send({error: error.message});
    }
};


//description - to create a new user
// method - post/api/users
// access - Public
const createUser = async(req,res) => {
    try {
        let data = req.body;
        let check = await User.findOne({email:data.email});
        if(!check){
            let password = await bcrypt.hash (data.password,10);
        data.password = password;
        let users = await User.create(data);
        res.status(200).send({
            data: users
        });}
        else{
            throw new Error("Email already exist")
        }
    } catch (error) {
        res.send({error: error.message});
    }
};

// description to auth user
// route post /api/users/login
// access public
const authUser = async (req,res) =>{
try {
    let {email,password} = req.body;

    let user = await User.findOne({email});
    if(user){
        let check = await bcrypt.compare(password,user.password); //will return true or false 
        if(check){
            let token = jwt.sign({id:user._id,isAdmin: user.isAdmin},process.env.SECRET_KRY);
            res.status(200).send({token});   
        }
        else{
            throw new Error("password is invalid")
        }
    }else{
        throw new Error("Email is invalid")
    }

} catch (error) {
    res.status(401).send({error:error.message});
    }
};

export {getUserById,getUsers,createUser,authUser};