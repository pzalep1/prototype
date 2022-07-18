import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../../entities/user/user';
import { UserWriteDTO } from '../../entities/user/userWriteDTO';

@Controller()
export class UserController {
  constructor(
    @InjectModel(User.name) private userModel: Model<any> 
    ) {}

  @Post('users')
  @UsePipes(ValidationPipe)
  async createUser(@Body() userUpdates: UserWriteDTO): Promise<string> {
    const user = new this.userModel(userUpdates);
    await user.save();
    return 'User Created!'
  }

  @Get("users/:userid")

  async UpdateUser(@Param('userid') userid:string): Promise<any>{
    console.log("userid")

  }
}