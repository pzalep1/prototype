import { SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export class file {

    public id: Types.ObjectId;

    public date: Date;

    public creator: string;

    public note: string;

    public location: string;

    constructor(partial: Partial<file>) {
        Object.assign(this, partial);
    }
}

export type fileDocument = file & Document;

export const fileSchema = SchemaFactory.createForClass(file);
