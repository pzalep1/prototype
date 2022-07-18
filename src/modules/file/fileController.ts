import { Body, Controller, HttpException, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { fileCreateDTO } from "src/entities/Files/createFile";
import { fileEditDTO } from "src/entities/Files/editFile";
import { file, fileDocument } from "src/entities/Files/file";

@Controller()
export  class fileController{
    constructor(
        @InjectModel(file.name) private fileModel: Model<fileDocument>
    ){}

    @Post('/file')
    async createFile(@Body() file: fileCreateDTO){

        const newFile = new this.fileModel({...file, 'date': new Date()});
        newFile.save();

        return 'File created!';
    }

    @Patch('/file/:fileId')
    async updateNote(@Param('fileId') id: string, @Body() file: fileEditDTO){
        if(id === null){
            throw new HttpException("No id provided", HttpStatus.BAD_REQUEST);
        }
        if(!Types.ObjectId.isValid(id)){
            throw new HttpException("Id is not valid", HttpStatus.BAD_REQUEST);
        }

        const foundFile = await this.fileModel.findOne({_id: id});
        if(!foundFile) {
            throw new HttpException("File does not exist", HttpStatus.NOT_FOUND);
        }

        const res = await foundFile.updateOne(file);
        return 'Note updated!';
    }

}