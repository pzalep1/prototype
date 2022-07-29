import { Type } from "class-transformer";
import { IsDate, IsDefined, IsEmail, IsString, Length } from "class-validator";

export class UserWriteDTO {
    @IsString()
    @IsDefined()
    f_name: string;

    @IsString()
    @IsDefined()
    l_name: string;

    @IsDate()
    @Type(() => Date)
    @IsDefined()
    birthday: Date;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @IsDefined()
    @Length(2, 70)
    username: string;

    constructor(partial: Partial<UserWriteDTO>) {
        Object.assign(this, partial);
    }

}