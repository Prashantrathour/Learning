const express=require("express")
const { posts } = require("../model/Post")
const { Auth } = require("../Middleware/AuthMiddleware")

const postrouter=express.Router()

postrouter.get('/posts',Auth,async (req,res)=>{
    let data=await posts.find()
    res.json({success:data,user:req.user,userid:req.userid})
})

module.exports={postrouter}