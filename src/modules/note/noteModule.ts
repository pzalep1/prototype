import { Module } from '@nestjs/common';
import { noteController } from './noteController';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [],
    controllers: [noteController],
    providers: [noteController],
    exports: [noteController]
})
export class NoteModule {}