import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostsController } from './Posts.controller';
import {postservice } from './Posts.service';
import { PostSchema } from './Posts.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: '{Post}', schema: PostSchema }]),
  ],
 controllers: [PostsController],
 providers: [postservice],
})
export class UsersModule {}
