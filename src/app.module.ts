import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { FileModule } from './modules/file/fileModule';
import { NoteModule } from './modules/note/noteModule';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [
    UserModule,
    NoteModule,
    FileModule,
    MongooseModule.forRoot(
      'mongodb://localhost/inso-2',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    ),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
