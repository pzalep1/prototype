import { Type } from "class-transformer";
import { IsDate, IsDefined, IsMongoId, IsString } from "class-validator";
import { Types } from "mongoose";

export class ScheduleWriteDTO {

    @IsDate()
    @Type(() => Date)
    @IsDefined()
    private date: Date;

    @IsMongoId()
    @Type(() => Types.ObjectId)
    private creator: Types.ObjectId;

    @IsString()
    @IsDefined()
    private location: string;

    constructor(partial: Partial<ScheduleWriteDTO>){
        Object.assign(this, partial)
    }

}