import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Section, SectionSchema } from 'src/entities/section/section';
import { SectionController } from './section.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Section.name, schema: SectionSchema }])
  ],
  controllers: [SectionController],
  providers: [],
})
export class SectionMule {}