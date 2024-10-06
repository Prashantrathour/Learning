const express=require("express")
const { usermodel } = require("../model/user.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userRouter=express.Router()
userRouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body
    if((!name||!email||!password)) {
        res.status(404).json({error:"Fill all details"})
     return
    }
    try {
            let updatepassword=bcrypt.hashSync(password,5) 
        try {
       
           const user= await usermodel({name,email,password:updatepassword})
           await user.save()
           res.json({success:"user save successfully"})
        } catch (error) {
            if(error.code==11000)
            res.status(404).json({error:`email duplicate: ${error.keyValue.email}`})
        }
    } catch (error) {
        res.status(404).json({error:error})
    }

})
userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    if((!email||!password)) {
        res.status(404).json({error:"Fill all details"})
     return
    }
    try {
        const user=await usermodel.findOne({email:email})
        if(user){

            try {
                let result=bcrypt.compareSync(password,user.password) 
                if(result){
                 const token=jwt.sign({userName:user.name,userId:user.id},"masai")
                    res.json({token})
                }else{
                    res.status(404).json("Wrong credential")
                }
           
            } catch (error) {
                res.status(404).json({error:error})
            }
        }else{
            res.status(404).json({error:"user not found"})
        }
    } catch (error) {
        res.status(404).json({error:error})
    }

})
module.exports={userRouter}