import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    
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
    },
      { timestamps: true }

);




export  interface Users extends mongoose.Document  {

         username: string,

         email: string,

         password: string,

          profilePicture: string,

         coverPicture: string,

         followers: string[],

         followings: string[],

         isAdmin: string,
    
         desc: string,

         city: string,

         from: string,

         relationship: number,

         timestamps: true
    
}
