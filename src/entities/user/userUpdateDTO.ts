export class UserUpdateDTO {
    f_name: string;
    l_name: string;
    birthday: Date;
    email: string;
    username: string;

    constructor(partial: Partial<UserUpdateDTO>) {
        Object.assign(this, partial);
    }
}