import { IsEmail, IsOptional, IsString, Length } from "class-validator";

export class UserUpdateDTO {

    @IsString()
    @IsOptional()
    f_name: string;

    @IsString()
    @IsOptional()
    l_name: string;

    @IsString()
    @IsOptional()
    birthday: Date;

    @IsString()
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @Length(2, 70)
    @IsOptional()
    username: string;

    constructor(partial: Partial<UserUpdateDTO>) {
        Object.assign(this, partial);
    }
}