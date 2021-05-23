import { Controller, Get, Post, Body, Param,Patch ,Delete} from '@nestjs/common';
import { postservice } from './Posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly PostService: postservice) { }

    @Post()
    createPost(
        @Body('userId') PuserId: string,
        @Body('desc') Pdesc: string,
        @Body('img') Pimg: string,
        @Body('likes') Plikes: string[],
       

    ): any {

        const generatePost = this.PostService.createPost(PuserId,Pdesc,Pimg,Plikes);

        return { id: generatePost };


    }
    @Get()
    getPost() {
        return this.PostService.getPosts();
    }
    @Get("/profile/:username")
    getAllPost( @Param('username') username: string,) {
        return this.PostService.getallPosts(username);
    }

    @Get("/timeline/:userId")
    getAllTimePost( @Param('username') userId: string,) {
        return this.PostService.getallTimelinePosts(userId);
    }
    @Patch()
    updateProduct(
      
        @Body('Uid') Pid: string,
  
        @Body('desc') Pdesc: string,
      
    ) {
      this.PostService.UpdatePost(Pid,Pdesc);
      return null;
    }
  
    @Delete()
    removeProduct(@Body('email') uemail: string){
        this.PostService.deletePost(uemail);
        return null;
    }

}
