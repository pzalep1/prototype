import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { UserUpdateDTO } from 'src/entities/user/userUpdateDTO';
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

  @Patch('users/:userid')
  async UpdateUser(@Param('userid') userId: string, @Body() update: UserUpdateDTO): Promise<any>{
    if(!Types.ObjectId.isValid(userId)) {
      throw new HttpException('UserId is not a valid mongo id', HttpStatus.BAD_REQUEST);
    }

    const user = await this.userModel.findOne({ _id: new Types.ObjectId(userId)});
    if(!user) {
      throw new HttpException('User was not found', HttpStatus.NOT_FOUND);
    }

    return await this.userModel.findOneAndUpdate({ _id: new Types.ObjectId(userId) }, { ...update });

  }
}