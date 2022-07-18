import {Types} from 'mongoose';
import { Type } from 'class-transformer';
import { IsArray, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BoardEditDTO{

    @IsNotEmpty()
    public users: Types.ObjectId[];

    @IsNotEmpty()
    @IsString()
    public location: string;

    @IsNotEmpty()
    @IsOptional()
    public notes: Types.ObjectId[];

    @IsNotEmpty()
    public sections: Types.ObjectId[];

    @IsNotEmpty()
    public files: Types.ObjectId[];

    @IsNotEmpty()
    public schedules: Types.ObjectId[];

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    public header: string;

    constructor(partial: Partial<BoardEditDTO>){
        Object.assign(this, partial)
    }


}