import { Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Board{

    @Prop([Types.ObjectId])
    public users: Types.ObjectId[];

    @Prop(String)
    public location: string;

    @Prop([Types.ObjectId])
    public notes: Types.ObjectId[];

    @Prop([Types.ObjectId])
    public sections: Types.ObjectId[];

    @Prop([Types.ObjectId])
    public files: Types.ObjectId[];

    @Prop([Types.ObjectId])
    public schedules: Types.ObjectId[];

    @Prop(String)
    public header: string;

    constructor(partial: Partial<Board>){
        Object.assign(this, partial);
    }
    

}

export const BoardSchema = SchemaFactory.createForClass(Board);
