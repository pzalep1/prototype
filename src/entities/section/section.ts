
import { Prop, Schema } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Board{

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

    constructor(partial: Partial<Board>){
        Object.assign(this, partial);
    }
}