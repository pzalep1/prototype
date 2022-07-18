import { Body, Controller, HttpException, HttpStatus, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Section } from 'src/entities/section/section';

@Controller()
export class SectionController {
  constructor(
    @InjectModel(Section.name) private sectionModel: Model<any> 
    ) {}

    @Post('/Sections')
    @UsePipes(ValidationPipe)
    async getSection(@Body() sectionUpdates: Section): Promise<string> {
        const sections = new this.sectionModel(this.sectionModel);
        await sections.save();
        return 'Section Created!'
    }

    @Patch('section/:sectionid')
    async UpdateSection(@Param('sectionId') sectionID: string, @Body() update: Section): Promise<any>{
        if(!Types.ObjectId.isValid(sectionID)) {
        throw new HttpException('SectionId is not a valid mongo id', HttpStatus.BAD_REQUEST);
        }

        const section = await this.sectionModel.findOne({ _id: new Types.ObjectId(sectionID)});
        if(!section) {
        throw new HttpException('Section was not found', HttpStatus.NOT_FOUND);
        }

        return await this.sectionModel.findOneAndUpdate({ _id: new Types.ObjectId(sectionID) }, { ...update });
    }

}