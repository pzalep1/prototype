import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { file, fileSchema } from 'src/entities/Files/file';
import { fileController } from './fileController';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: file.name, schema: fileSchema}])],
    controllers: [fileController],
    providers: [fileController],
    exports: [fileController]
})
export class FileModule {}