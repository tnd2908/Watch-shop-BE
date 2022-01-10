import { Customer } from "./Class/customer"
import { Admin } from './Class/admin'
import { Employee } from './Class/Employee'
import { ICustomer } from "../Interface/customer"
export class Factory {
    createUser = (data: ICustomer, type: string) =>{
        const {firstName, lastName, phone, gender, email, password} = data
        if(type === 'customer' || data.role === null){
            return new Customer(firstName, lastName, phone, gender, email, password, 'customer')
        }
        if(type === 'admin'){
            return new Admin(email, password, 'admin')
        }
        if(type === 'employee'){
            return new Employee(email, password, 'employee')
        }
    }
}