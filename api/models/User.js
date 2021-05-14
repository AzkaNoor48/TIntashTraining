const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
    tokens:[{
      token:{
        type:String,
        required:true
      }
    }]
  },
  { timestamps: true }
);


UserSchema.methods.generateAuthToken=async function(){
  try{
 
      const  token=await jwt.sign({_id:this._id.toString()},process.env.REFRESH_TOKEN_SECRET);
     this.tokens=this.tokens.concat({token});
      //const userVerify= await jwt.verify();
      await this.save();
    return token;
      
  }
  catch(err){
    console.log(err);
  }
} 



module.exports = mongoose.model("User", UserSchema);
