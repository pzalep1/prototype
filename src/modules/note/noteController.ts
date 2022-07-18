import { Body, Controller, Post } from "@nestjs/common";
import { noteCreateDTO } from "src/entities/Notes/createNote";
import { note } from "src/entities/Notes/note";

@Controller()
export  class noteController{
    constructor(){}

    @Post('note')
    async createNote(@Body() note: noteCreateDTO){

        
    }

}