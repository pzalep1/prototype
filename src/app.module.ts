import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './entities/user/user';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/inso',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    ),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
