

export class UserWriteDTO {
    f_name: string;
    l_name: string;
    birthday: Date;
    email: string;
    username: string;

    constructor(partial: Partial<UserWriteDTO>) {
        Object.assign(this, partial);
    }

}