import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './Users.model'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
const bcrypt = require("bcrypt");



@Injectable()
export class userservice {
    constructor(
        @InjectModel('User') private readonly userModel: Model<Users>,
    ) { }
    users: Users[] = [];
    async register(username,

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

    ) {
        const newUser = new this.userModel({
            username,

            email,

            password,

            profilePicture,

            coverPicture,

            followers,

            followings,

            isAdmin,

            desc,

            city,

            from,

            relationship,

            timestamps: true
        });
        const result = await newUser.save();


        return result.id;
    }
    login(Uemail: string, Upass: string) {
        const user = this.findUser(Uemail, Upass)[0];
        return { ...user };
    }
    private async findUser(Uemail: string, Upass: string): Promise<Users> {
        let user;
        try {
            user = await this.userModel.findById(Uemail).exec();
            const validPassword = await bcrypt.compare(Upass, user.password)
        } catch (error) {
            throw new NotFoundException('Could not find user.');
        }
        if (!user) {
            throw new NotFoundException('Could not find user.');
        }
        return user;
    }
    async getUsers() {
        const users = await this.userModel.find().exec();
        return users.map(user => ({
            username: user.username,
            email: user.email,
            password: user.password,
            followers: user.followers,
            followings: user.followings,
            profilePicture: user.profilePicture,
            coverPicture: user.coverPicture,
            isAdmin: user.isAdmin,
            CountQueuingStrategy: user.city,
            from: user.from,
            desc: user.desc,
            relationship: user.relationship,
        }));
    }


    async UpdateUser(

        username: string,

        email: string,

        password: string,

        desc: string,

        city: string,

        from: string,

        relationship: number) {
        const updateduser = await this.findUser(email, password);
        if (username) {
            updateduser.username = username;
        } if (password) {
            updateduser.password = password;
        }
        if (desc) {
            updateduser.desc = desc;
        }
        if (city) {
            updateduser.city = city;
        } if (from) {
            updateduser.from = from;
        } if (relationship) {
            updateduser.relationship = relationship;
        }
        updateduser.save();
    }


    async deleteUser(Uemail: string) {
        const result = await this.userModel.deleteOne({ _id: Uemail }).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find product.');
        }
    }
    async getFriends(Uemail: string) {
        try {
            const user = await this.userModel.findById(Uemail);
            const friends = await Promise.all(
                user.followings.map((friendId) => {
                    return this.userModel.findById(friendId);
                }));
            let friendList = [];
            friends.map((friend) => {
                const { _id, username, profilePicture } = friend;
                friendList.push({ _id, username, profilePicture });
            });
            return(friendList);
        } catch (error) {
            throw new NotFoundException('Could not find user.');
        }
    }
    async unfollow(Uemail: string,Pemail: string) {
        if (Uemail !== Pemail) {
        try {
            const user = await this.userModel.findById(Pemail);
            const currentUser = await this.userModel.findById(Uemail);
            if (user.followers.includes(Uemail)) {
              await user.updateOne({ $pull: { followers: Uemail } });
              await currentUser.updateOne({ $pull: { followings: Pemail } });
            }
          }  catch (error) {
            throw new NotFoundException('you dont follow this user.');
        }
    }
    }
    async follow(Uemail: string,Pemail: string) {
        if (Uemail !== Pemail) {
            try {
              const user = await this.userModel.findById(Pemail);
              const currentUser = await this.userModel.findById(Uemail);
              if (!user.followers.includes(Uemail)) {
                await user.updateOne({ $push: { followers: Uemail } });
                await currentUser.updateOne({ $push: { followings: Pemail } });
              
              } 
            } catch (error) {
            throw new NotFoundException('you allready follow this user.');
        }
    }
}
}
