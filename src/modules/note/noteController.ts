import { Body, Controller, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { noteCreateDTO } from "src/entities/Notes/createNote";
import { note, noteDocument } from "src/entities/Notes/note";

@Controller()
export  class noteController{
    constructor(
        @InjectModel(note.name) private noteModel: Model<noteDocument>
    ){}

    @Post()
    async createNote(@Body() note: noteCreateDTO){

        const newNote = new this.noteModel({...note});
        newNote.save();

        return 'Note created!';
    }

}