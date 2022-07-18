import { Body, Controller, Get, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppService } from './app.service';
import { User } from './entities/user/user';
import { UserUpdateDTO } from './entities/user/userUpdateDTO';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectModel(User.name) private userModel: Model<any> 
    ) {}

  @Patch()
  @UsePipes(ValidationPipe)
  async getHello(@Body() userUpdates: UserUpdateDTO): Promise<string> {
    const user = new this.userModel(userUpdates);
    await user.save();
    return 'User Created!'
  }

  @Get('home')
  getHome(): string {
    return 'home is working';
  }
}
``