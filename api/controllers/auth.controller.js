import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../middleware/errorHandler.js";

import User from "../models/user.model.js";


export const register = async(req,res,next)=>{
    try {

        const hash = bcrypt.hashSync(req.body.password,7)
        const newUser = new User({
          ...req.body,
          password:hash,
        })

        await newUser.save()
        res.status(201).send("User has been registered")
    } catch (error) {
       next(err)
    }
}

export const login = async (req,res,next) => {
  try {
    const user = await User.findOne(req.body.username);

    if(!user) return next(createError(404,"User not found")); 


    const isCorrect= bcrypt.compare(req.body.password, user.password)
     

    if(!isCorrect) return next(createError(404, "Wrong Credentials")); 

    const token = jwt.sign({
      id:user._id,
      isSeller:user.isSeller,

    },process.env.JWT_KEY)
    const {password, ...others}= user._doc

    res.cookie("accessToken",token,{
      httpOnly:true
    }).status(200).send(others)
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

export const logout = async (req, res,next) => {
  res.clearCookie("accessToken",{
    sameSite:"none",
    secure:true
  }).status(200).send("User has been logged out");
};