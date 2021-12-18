import User from "../../Model/user";
import { Admin } from "./admin";
import bcrypt from 'bcrypt';
export class Customer extends Admin{
    constructor(
        public firstName: string,
        public lastName: string,
        public phone: Number,
        public gender: string,
        public email: string,
        public password: string,
        public role: string,
    ){
        super(email, password, role)
    }
    async register(){
        const hashpassword = await bcrypt.hash(this.password, 10)
        const user = {
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            gender: this.gender,
            email: this.email,
            password: hashpassword,
            role: this.role
        }
        await User.create(user)
    }
}