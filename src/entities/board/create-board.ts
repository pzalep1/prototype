import {Types} from 'mongoose';
import { Type } from 'class-transformer';
import { IsArray, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class BoardCreateDTO{

    @IsNotEmpty()
    @Type(() => Types.Object)
    public users: Types.ObjectId[];

    @IsNotEmpty()
    @IsString()
    public location: string;

    @IsNotEmpty()
    @Type(() => Types.Object)
    public notes: Types.ObjectId[];

    @IsNotEmpty()
    @Type(() => Types.Object)
    public sections: Types.ObjectId[];

    @IsNotEmpty()
    @Type(() => Types.Object)
    public files: Types.ObjectId[];

    @IsNotEmpty()
    @Type(() => Types.Object)
    public schedules: Types.ObjectId[];

    @IsNotEmpty()
    @IsString()
    public header: string;

    constructor(partial: Partial<BoardCreateDTO>){
        Object.assign(this, partial)
    }

}