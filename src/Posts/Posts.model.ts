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


export class Posts {
    constructor(
        public userId: string,

        public desc: string,

        public img: string,

 
        public likes: string[],

     
    ) { }
}
