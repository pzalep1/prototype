import { Body, Controller, Get, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { UserUpdateDTO } from './entities/user/userUpdateDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Patch()
  @UsePipes(ValidationPipe)
  getHello(@Body() userUpdates: UserUpdateDTO): string {
    console.log(userUpdates)
    return this.appService.getHello();
  }

  @Get('home')
  getHome(): string {
    return 'home is working';
  }
}
``