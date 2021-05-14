const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth=async (req,res,next)=>{
try{
    const token= req.cookies.jwt;
    const verify=jwt.verify(token,process.env.REFRESH_TOKEN_SECRET);
     
    const user=await User.findOne({_id:verify._id});
  //  req.token=token;
  //  req.user=user;
  res.cookie("user", user, {httpOnly:true})
    next();
}catch(err){
    res.status(401).render('login');
}
}

module.exports=auth;