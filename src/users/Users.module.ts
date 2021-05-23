import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './Users.controller';
import {userservice } from './Users.service';
import { UserSchema } from './Users.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
 controllers: [UsersController],
 providers: [userservice],
})
export class UsersModule {}
