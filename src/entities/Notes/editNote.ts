import { IsDate, IsString, IsNotEmpty, ValidateNested, isString, IsBoolean } from 'class-validator';

export class noteEditDTO
 {
    @IsString()
    public id: string;

    @IsString()
    public creator: string;

    @IsString()
    public note: string;

    @IsString()
    public location: string;

    @IsBoolean()
    public draft: boolean;
}