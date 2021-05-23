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

    async createPost(userId: string, desc: string, img: string, likes: string[],
    ) {
        const newPost = new this.PostModel({
            userId, desc, img, likes
        });
        const result = await newPost.save();


        return result.id;
    }
    async getPosts() {
        const posts = await this.PostModel.find().exec();
        return posts.map(post => ({
            id: post.userId,
            img: post.img,
            desc: post.desc,
            likes: post.likes,
        }));
    }

    private async findpost(id: string): Promise<Posts> {
        let post;
        try {
            post = await this.PostModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find post.');
        }
        if (!post) {
            throw new NotFoundException('Could not find post.');
        }
        return post;
    }

    getPost() {
        return [...this.posts];

    }

    async UpdatePost(Uid: string, desc: string) {
        const updatepost = await this.findpost(Uid);

        if (desc) {
            updatepost.desc = desc;
        }
        updatepost.save;
    }


    async deletePost(PID: string) {
        const result = await this.PostModel.deleteOne({ _id: PID }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find product.');
        }
    }
}
