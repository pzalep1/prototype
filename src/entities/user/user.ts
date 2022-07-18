import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    f_name: string;

    @Prop()
    l_name: string;

    @Prop()
    birthday: Date;

    @Prop()
    email: string;

    @Prop()
    username: string;

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }

}

export const UserSchema = SchemaFactory.createForClass(User);