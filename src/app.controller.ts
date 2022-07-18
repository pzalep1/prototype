import { Body, Controller, Get, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppService } from './app.service';
import { User } from './entities/user/user';
import { UserUpdateDTO } from './entities/user/userUpdateDTO';

@Controller()
export class AppController {
  constructor(
    ) {}

  @Patch()
  @UsePipes(ValidationPipe)
  async getHello(): Promise<string> {
    return 'Welcome to the getHello'
  }

  @Get('home')
  getHome(): string {
    return 'home is working';
  }
}
