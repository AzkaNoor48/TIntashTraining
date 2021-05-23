import { Injectable, NotFoundException } from '@nestjs/common';
import { Posts } from './Posts.model'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



@Injectable()
export class postservice {
    constructor(
        @InjectModel('Post') private readonly PostModel: Model<Posts>,
    ) { }
    posts: Posts[] = [];
    async createPost(userId: string,

        desc: string,

        img: string,


        likes: string[],
    ) {
        const newPost = new this.PostModel({
            userId,

            desc,

            img,


            likes
        });
        const result = await newPost.save();


        return result.id;
    }
    GetPost(Uid: string) {
        const post = this.findpost(Uid)[0];
        return { ...post };
    }
    private findpost(Uid: string): [Posts, number] {
        const userIndex = this.posts.findIndex(u => u.userId === Uid);
        const user = this.posts[userIndex];

        if (!user) {
            throw new NotFoundException('Could not find post.');
        }
        return [user, userIndex]
    }
    getPosts() {
        return [...this.posts];

    }
    UpdatePost(

        Uid: string,

        desc: string,



    ) {
        const [post, index] = this.findpost(Uid);
        const updatepost = { ...post };

        if (desc) {
            updatepost.desc = desc;
        }
        this.posts[index] = updatepost;
    }


    deletePost(Uid: string) {
        const index = this.findpost(Uid)[1];
        this.posts.splice(index, 1);
    }
}
