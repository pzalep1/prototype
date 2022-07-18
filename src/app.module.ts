import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './entities/user/user';
import { FileModule } from './modules/file/fileModule';
import { NoteModule } from './modules/note/noteModule';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost/inso-2',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    ),
    FileModule,
    NoteModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
