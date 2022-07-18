import { Body, Controller, Get, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
    return 'User Created!'
  }
}