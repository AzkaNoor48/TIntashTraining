import * as mongoose from 'mongoose';

export const  PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);


export  interface Posts extends mongoose.Document  {
   
         userId: string,

         desc: string,

         img: string,

 
         likes: string[],

     
  
}
