
//import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { BadRequestException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import { IsDate, IsString, IsNotEmpty, ValidateNested, isString } from 'class-validator';
import { Types } from 'mongoose';

export class fileCreateDTO
 {
    // @IsString()
    // public id: string;

    @Type(() => Types.ObjectId)
    @Transform((id:any) => {
        if (!Types.ObjectId.isValid(id.value)) {
          throw new BadRequestException(['Invalid ObjectId for Creator Id']);
        }
        return new Types.ObjectId(id.value);
    })
    @IsNotEmpty()
    public creator: Types.ObjectId;

    @IsString()
    @IsNotEmpty()
    public note: string;

    @IsString()
    @IsNotEmpty()
    public location: string;

    constructor(partial: Partial<fileCreateDTO>) {
        Object.assign(this, partial);
    }
}