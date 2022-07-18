import { Body, Controller, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { fileCreateDTO } from "src/entities/Files/createFile";
import { file, fileDocument } from "src/entities/Files/file";

@Controller()
export  class fileController{
    constructor(
        @InjectModel(file.name) private fileModel: Model<fileDocument>
    ){}

    @Post()
    async createFile(@Body() file: fileCreateDTO){

        const newFile = new this.fileModel({...file});
        newFile.save();

        return 'File created!';
    }

}