import { Body, Controller, Post } from "@nestjs/common";
import { fileCreateDTO } from "src/entities/Files/createFile";

@Controller()
export  class fileController{
    constructor(){}

    @Post('file')
    async createNote(@Body() note: fileCreateDTO){

        
    }

}