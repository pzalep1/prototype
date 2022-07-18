import { Type } from "class-transformer";
import { IsDate, IsDefined, IsMongoId } from "class-validator";
import { Types } from "mongoose";

export class ScheduleWriteDTO {

    @IsDate()
    @Type(() => Date)
    @IsDefined()
    private date: Date;

    @IsMongoId()
    private creator: Types.ObjectId;
    private location: string;

    constructor(partial: Partial<ScheduleWriteDTO>){
        Object.assign(this, partial)
    }

}