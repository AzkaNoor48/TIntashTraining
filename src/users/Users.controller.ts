import { Controller, Get, Post, Body, Param,Patch ,Delete} from '@nestjs/common';
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
  
    @Delete()
    deleteUser(@Body('email') uemail: string){
        this.UserService.deleteUser(uemail);
        return null;
    }

}
