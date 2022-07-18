import { Body, Controller, Post } from "@nestjs/common";
import { fileCreateDTO } from "src/entities/Files/createFile";

@Controller()
export  class fileController{
    constructor(){}

    @Post()
    async createNote(@Body() note: fileCreateDTO){

        
    }

}