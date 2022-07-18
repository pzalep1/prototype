
//import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsDate, IsString, IsNotEmpty, ValidateNested, isString } from 'class-validator';

export class fileCreateDTO
 {

    @IsDate()
    @IsNotEmpty()
    public date: Date;

    @IsString()
    @IsNotEmpty()
    public creator: string;

    @IsString()
    @IsNotEmpty()
    public note: string;

    @IsString()
    @IsNotEmpty()
    public location: string;
}