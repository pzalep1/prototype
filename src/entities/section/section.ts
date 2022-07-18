
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Section{

    @Prop()
    public users: Types.ObjectId[];

    @Prop(String)
    public location: string;

    @Prop()
    public notes: Types.ObjectId[];

    @Prop()
    public files: Types.ObjectId[];

    @Prop()
    public creator: Types.ObjectId;

    @Prop()
    public date: Date;

    @Prop()
    public header: string;

    constructor(partial: Partial<Section>){
        Object.assign(this, partial);
    }
}

export const SectionSchema = SchemaFactory.createForClass(Section);
