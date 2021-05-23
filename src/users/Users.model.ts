export class Users {
    constructor(
        public username: string,

        public email: string,

        public password: string,

        public  profilePicture: string,

        public coverPicture: string,

        public followers: string[],

        public followings: string[],

        public isAdmin: string,
    
        public desc: string,

        public city: string,

        public from: string,

        public relationship: number,

        public timestamps: true
    ) { }
}
