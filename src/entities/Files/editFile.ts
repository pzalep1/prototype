import { IsDate, IsString, IsNotEmpty, ValidateNested, isString } from 'class-validator';

export class fileEditDTO
 {
    @IsString()
    public id: string;

    @IsDate()
    public date: Date;

    @IsString()
    public creator: string;

    @IsString()
    public note: string;

    @IsString()
    public location: string;
}