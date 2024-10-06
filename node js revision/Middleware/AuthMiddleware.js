const jwt=require("jsonwebtoken")

const Auth=(req,res,next)=>{
const token=req.headers.authorization?.split(" ")[1];

if(token){
    try {
        let decode=jwt.verify(token,"masai")
        req.user=decode.userName
        req.userid=decode.userId

        next()
    } catch (error) {
       res.status(404).json({error:"Error verifying",message:"Please login first"}) 
    }
}else{
    res.status(404).json({error:"Please enter authorization token",message:"Please Login Again"});
}
}
module.exports={Auth}