import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './Users.model'

@Injectable()
export class userservice {
    users: Users[] = [];
    register(username,

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
        const newUser = new Users(username,

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

            true)
        this.users.push(newUser);

        return 'Registered successfully!';
    }
    login(Uemail: string, Upassword: string) {
        const user = this.finduser(Uemail, Upassword)[0];
        return { ...user };
    }
    private finduser(Uemail: string, Upassword: string): [Users, number] {
        const userIndex = this.users.findIndex(u => u.email === Uemail && u.password === Upassword);
        const user = this.users[userIndex];

        if (!user) {
            throw new NotFoundException('Could not find user.');
        }
        return [user, userIndex]
    }
    getUsers() {
        return [...this.users];

    }
    UpdateUser(

        username: string,

        email: string,

        password: string,

        desc: string,

        city: string,

        from: string,

        relationship: number) {
        const [user, index] = this.finduser(email, password);
        const updateduser = { ...user };
        if (username) {
            updateduser.username = username;
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
        this.users[index] = updateduser;
    }


    deleteUser(Uemail: string, Upassword: string) {
        const index = this.finduser(Uemail, Upassword)[1];
        this.users.splice(index, 1);
    }
}
