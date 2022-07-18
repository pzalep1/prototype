import {Types} from 'mongoose';
import { Type } from 'class-transformer';
import { IsArray, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class BoardCreateDTO{

    @IsNotEmpty()
    @IsArray()
    public users: Types.ObjectId[];

    @IsNotEmpty()
    @IsString()
    public location: string;

    @IsNotEmpty()
    @IsArray()
    public notes: Types.ObjectId[];

    @IsNotEmpty()
    @IsArray()
    public sections: Types.ObjectId[];

    @IsNotEmpty()
    @IsArray()
    public files: Types.ObjectId[];

    @IsNotEmpty()
    @IsArray()
    public schedules: Types.ObjectId[];

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    public header: string;

    constructor(partial: Partial<BoardCreateDTO>){
        Object.assign(this, partial)
    }

}