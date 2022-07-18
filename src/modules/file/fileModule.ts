import { Module } from '@nestjs/common';
import { fileController } from './fileController';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [],
    controllers: [fileController],
    providers: [fileController],
    exports: [fileController]
})
export class FileModule {}