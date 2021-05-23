import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './Users.controller';
import {userservice } from './Users.service';


@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://Azka:azka1007@cluster0.gprli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
  ],
 controllers: [UsersController],
 providers: [userservice],
})
export class UsersModule {}
