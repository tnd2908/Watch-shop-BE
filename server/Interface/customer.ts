import {IUser} from './user'
export interface ICustomer extends IUser{
    firstName: string,
    lastName: string,
    phone: Number,
    gender: string,
    register(): void
}