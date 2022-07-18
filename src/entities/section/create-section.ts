import {Types} from 'mongoose';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class SectionCreateDTO{

    @IsNotEmpty()
    @Type(() => Types.Object)
    @IsArray()
    public users: Types.ObjectId[];

    @IsNotEmpty()
    @IsString()
    public location: string;

    @IsNotEmpty()
    @Type(() => Types.Object)
    @IsArray()
    public notes: Types.ObjectId[];

    @IsNotEmpty()
    @Type(() => Types.Object)
    public files: Types.ObjectId[];

    @IsNotEmpty()
    @Type(() => Types.Object)
    @IsArray()
    public creator: Types.ObjectId[];

    @IsNotEmpty()
    @Type(() => Types.Object)
    public date: Date;

    @IsNotEmpty()
    @IsString()
    public header: string;

    constructor(partial: Partial<SectionCreateDTO>){
        Object.assign(this, partial)
    }

}