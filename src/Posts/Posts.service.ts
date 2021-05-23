import { Injectable, NotFoundException } from '@nestjs/common';
import { Posts } from './Posts.model'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from '../users/Users.model'



@Injectable()
export class postservice {
    constructor(
        @InjectModel('Post') private readonly PostModel: Model<Posts>,
        @InjectModel('User') private readonly userModel: Model<Users>,
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

  async getPost(Uid: string) {
        try {
            const post = await this.PostModel.findById(Uid);
            return(post);
          } catch (err) {
            throw new NotFoundException('Could not find post.');
          }

    }

    async UpdatePost(Uid: string, desc: string) {
        const updatepost = await this.findpost(Uid);

        if (desc) {
            updatepost.desc = desc;
        }
        updatepost.save;
    }

    async getallPosts(Uid: string) {
        try {
            const user = await this.userModel.findOne({ username: Uid });
            const posts = await this.PostModel.find({ userId: user._id });
            return (posts);
          } catch (error) {
            throw new NotFoundException('no Post.');
        }
    }

    

    async getallTimelinePosts(Uid: string) {
        try {
            const currentUser = await this.userModel.findById(Uid);
            const userPosts = await this.PostModel.find({ userId: currentUser._id });
            const friendPosts = await Promise.all(
              currentUser.followings.map((friendId) => {
                return this.PostModel.find({ userId: friendId });
              })
            );
            return (userPosts.concat(...friendPosts));
          } catch (error) {
            throw new NotFoundException('no timeline Post.');
        }
    }
    async deletePost(PID: string) {
        const result = await this.PostModel.deleteOne({ _id: PID }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find product.');
        }
    }
}
