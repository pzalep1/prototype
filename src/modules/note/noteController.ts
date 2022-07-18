import { Body, Controller, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { noteCreateDTO } from "src/entities/Notes/createNote";
import { noteEditDTO } from "src/entities/Notes/editNote";
import { note, noteDocument } from "src/entities/Notes/note";

@Controller()
export  class noteController{
    constructor(
        @InjectModel(note.name) private noteModel: Model<noteDocument>
    ){}

    @Post('note')
    async createNote(@Body() note: noteCreateDTO){

        if(note == null){
            throw new HttpException('Cannot send empty body', HttpStatus.BAD_REQUEST);
        }
        const newNote = new this.noteModel({...note, 'date': new Date()});
        newNote.save();

        return 'Note created!';
    }

    @Patch('/note/:noteId')
    async updateNote(@Param('noteId') id: string, @Body() note: noteEditDTO){
        if(id === null){
            throw new HttpException("No id provided", HttpStatus.BAD_REQUEST);
        }
        if(!Types.ObjectId.isValid(id)){
            throw new HttpException("Id is not valid", HttpStatus.BAD_REQUEST);
        }

        const foundNote = await this.noteModel.findOne({_id: id});
        if(!foundNote) {
            throw new HttpException("Note does not exist", HttpStatus.NOT_FOUND);
        }

        const res = await foundNote.updateOne(note);
        return 'Note updated!';
    }

}
