import { IsDate, IsString, IsNotEmpty, ValidateNested, isString, IsBoolean } from 'class-validator';

export class noteCreateDTO
 {

    @IsString()
    @IsNotEmpty()
    public creator: string;

    @IsString()
    @IsNotEmpty()
    public note: string;

    @IsString()
    @IsNotEmpty()
    public location: string;

    @IsNotEmpty()
    @IsBoolean()
    public draft: boolean;

    constructor(partial: Partial<noteCreateDTO>) {
        Object.assign(this, partial);
    }
}