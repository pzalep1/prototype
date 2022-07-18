
//import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsDate, IsString, IsNotEmpty, ValidateNested } from 'class-validator';

export class fileCreateDTO
 {
    @IsString()
    public id: string;

    public date: Date;

    public creator: string;

    public note: string;

    public location: string;
}