import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
  constructor(
    ) {}

  @Get('home')
  getHome(): string {
    return 'home is working';
  }
}
