import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {
    @Prop()
    date: Date;

    @Prop()
    creator: Types.ObjectId;

    @Prop()
    location: string;

    constructor(partial: Partial<Schedule>) {
        Object.assign(this, partial);
    }

}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);