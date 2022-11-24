import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/useModel.js";


dotenv.config();
// next is a middleware
const protect = async(req,res,next) =>{
 try {
    let token = req.headers.authorization;

    if(token){
        let {isAdmin} = jwt.verify(token.split(" ")[1],process.env.SECRET_KRY);
        if(isAdmin) next();
        else throw new Error("Request failed ,not Authorized");
    }else{
        throw new Error("Request failed ,no token");
    }
 } catch (error) {
    res.status(401).send({error: error.message});
 }
};



export default protect;