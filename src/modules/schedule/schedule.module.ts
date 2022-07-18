import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleController } from './schedule.controller';
import { User, UserSchema } from '../../entities/user/user';
import { Schedule, ScheduleSchema } from 'src/entities/schedule/schedule';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Schedule.name, schema: ScheduleSchema }])
  ],
  controllers: [ScheduleController],
  providers: [],
})
export class UserModule {}