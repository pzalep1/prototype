import { Module } from '@nestjs/common';
import { noteController } from './noteController';
import { MongooseModule } from '@nestjs/mongoose';
import { note, noteSchema } from 'src/entities/Notes/note';

@Module({
    imports: [MongooseModule.forFeature([{ name: note.name, schema: noteSchema}])],
    controllers: [noteController],
    providers: [noteController],
    exports: [noteController]
})
export class NoteModule {}