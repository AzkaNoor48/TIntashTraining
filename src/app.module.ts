import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule } from './users/Users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(
    'mongodb+srv://Azka:azka1007@cluster0.gprli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

  ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
