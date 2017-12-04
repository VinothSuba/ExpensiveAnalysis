export class User {
    public user_id: number;
    public user_name: string;
    public phone_number: string;
    public email:string;
    public password:string;
    constructor(user_id, user_name, phone_number, email, password) {
    }
}


export class Expensive {
    public id: number;
    public user_id: number;
    public user_name: string;
    // public date: Date;
    // public amount: number;
    // public description: string;
    // public is_deleted: boolean;
    // constructor(id, user_id, user_name, date, amount, description, is_deleted) { }
}

export class LoginUserDTO{
    public username:string;
    public password:string;
    constructor(username, password){}
}