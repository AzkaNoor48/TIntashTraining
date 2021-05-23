import { Controller, Get, Post, Body, Param,Patch ,Put,Delete} from '@nestjs/common';
import { userservice } from './Users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService: userservice) { }

    @Post()
    register(
        @Body('username') Rusername: string,
        @Body('email') Remail: string,
        @Body('password') Rpassword: string,
        @Body('profileprictue') Rprofileprictue: string,
        @Body('coverpicture') Rcoverpicture: string,
        @Body('followers') Rfollowers: string[],
        @Body('followings') Rfollowings: string[],
        @Body('isAdmin') RisAdmin: string,
        @Body('desc') Rdesc: string,
        @Body('city') Rcity: string,
        @Body('from') Rfrom: string,
        @Body('relationship') Rrelationship: number,

    ): any {

        const generateUser = this.UserService.register(Rusername, Remail, Rpassword, Rprofileprictue, Rcoverpicture, Rfollowers,
            Rfollowings, RisAdmin, Rdesc, Rcity, Rfrom, Rrelationship);

        return { id: generateUser };


    }
    @Get("/friends/:email")
    getFriends(@Param('email') uemail: string) {
        return this.UserService.getFriends(uemail);
    }
    @Get()
    login(@Body('email') uemail: string, @Body('password') upassword: string) {
        return this.UserService.login(uemail, upassword);
    }

    @Patch()
    updateProduct(
        @Body('username') Rusername: string,
        @Body('email') Remail: string,
        @Body('password') Rpassword: string,
        @Body('desc') Rdesc: string,
        @Body('city') Rcity: string,
        @Body('from') Rfrom: string,
        @Body('relationship') Rrelationship: number,

    ) {
      this.UserService.UpdateUser(Rusername, Remail, Rpassword,Rdesc, Rcity,Rfrom,Rrelationship);
      return null;
    }

    @Put("/:email/follow")
    followuser(@Body('email') uemail: string, @Param('email') email: string) {
        return this.UserService.follow(uemail, email);
    }
  
  
    @Put("/:email/unfollow")
    unfollowuser(@Body('email') uemail: string,@Param('email') email: string){
        return this.UserService.unfollow(uemail, email);
    }
  
    @Delete()
    deleteUser(@Param('email') uemail: string){
        this.UserService.deleteUser(uemail);
        return null;
    }

}
