import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class file {

    @Prop(Types.ObjectId)
    public id: Types.ObjectId;

    @Prop(Date)
    public date: Date;

    @Prop(String)
    public creator: string;

    @Prop(String)
    public note: string;

    @Prop(String)
    public location: string;

    constructor(partial: Partial<file>) {
        Object.assign(this, partial);
    }
}

export type fileDocument = file & Document;

export const fileSchema = SchemaFactory.createForClass(file);
