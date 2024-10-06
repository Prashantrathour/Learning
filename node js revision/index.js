const express=require('express')
const fs=require('fs')
const timelogger = require('./Middleware/Timelogger')
const mongoose=require("mongoose")
const { connection } = require('./config')
const { posts } = require('./model/Post')
const {  postrouter } = require('./Routes/posts')
const { userRouter } = require('./Routes/user.router')
const app=express()

app.use(express.json())
app.use(timelogger)
app.use("/",postrouter)
app.use("/user",userRouter)
// app.get('/',async (req,res)=>{
//    let data=await posts.find()
//    res.json({success:data})
   
// })


app.listen(3030,async ()=>{
    try {
        connection
        console.log('connected to mongo')
        
    } catch (error) {
        console.log(error)
    }
    console.log('server is running','http://localhost:3030')
})