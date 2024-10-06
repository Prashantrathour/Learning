const { Schema, default: mongoose } = require("mongoose");

const UserModel=new Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
})

const usermodel=mongoose.model("user",UserModel)

module.exports={usermodel}