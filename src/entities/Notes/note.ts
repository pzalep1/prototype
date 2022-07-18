import { SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

export class note {
    
    public id: Types.ObjectId;

    public creator: string;

    public note: string;

    public location: string;

    public draft: boolean;

    constructor(partial: Partial<note>) {
        Object.assign(this, partial);
    }
}

export type noteDocument = note & Document;

export const fileSchema = SchemaFactory.createForClass(note);

