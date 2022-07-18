import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class note {
    
    @Prop(Types.ObjectId)
    public id: Types.ObjectId;

    @Prop(String)
    public creator: string;

    @Prop(String)
    public note: string;

    @Prop(String)
    public location: string;

    @Prop(Boolean)
    public draft: boolean;

    @Prop(Date)
    public date: Date;

    constructor(partial: Partial<note>) {
        Object.assign(this, partial);
    }
}

export type noteDocument = note & Document;

export const noteSchema = SchemaFactory.createForClass(note);

