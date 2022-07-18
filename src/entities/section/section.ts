@Schema()
export class Board{

    @Prop([Types.ObjectId])
    public users: Types.ObjectId[];

    @Prop(String)
    public location: string;

    @Prop([Types.ObjectId])
    public notes: Types.ObjectId[];

    @Prop([Types.ObjectId])
    public files: Types.ObjectId[];

    @Prop(Types.ObjectId)
    public creator: Types.ObjectId;

    @Prop(Date)
    public date: Date;

    @Prop(String)
    public header: string;

    constructor(partial: Partial<Board>){
        Object.assign(this, partial);
    }