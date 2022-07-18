import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './entities/user/user';
import { UserModule } from './modules/file/fileModule';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/inso-2',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    ),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
