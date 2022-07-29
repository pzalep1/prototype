import {Types} from 'mongoose';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class SectionCreateDTO{

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
    public files: Types.ObjectId[];

    @IsNotEmpty()
    @IsArray()
    public creator: Types.ObjectId[];

    @IsNotEmpty()
    public date: Date;

    @IsNotEmpty()
    @IsString()
    public header: string;

    constructor(partial: Partial<SectionCreateDTO>){
        Object.assign(this, partial)
    }

}