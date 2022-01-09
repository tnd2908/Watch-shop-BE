import { IVoucher } from "./interface/IVoucher"
import Voucher from "../Model/Voucher";
export class VoucherBuilder{
    private readonly _voucher: IVoucher
    constructor(){
        this._voucher = {
            name : '',
            code : '',
            startDate : new Date(),
            endDate : new Date(),
            applyFor : 0,
            discount : 0,
            quantity : 0,
            description : ''
        };
    }
    name(name: string): VoucherBuilder {
        this._voucher.name = name;
        return this;
    }
    code(code: string): VoucherBuilder {
        this._voucher.code = code;
        return this
    }  
    startDate(startDate: Date): VoucherBuilder {
        this._voucher.startDate = startDate;
        return this
    }  
    endDate(endDate: Date): VoucherBuilder {
        this._voucher.endDate = endDate;
        return this
    }  
    applyFor(applyFor: Number): VoucherBuilder {
        this._voucher.applyFor = applyFor;
        return this
    }  
    discount(discount: Number): VoucherBuilder {
        this._voucher.discount = discount;
        return this
    }  
    quantity(quantity: Number): VoucherBuilder {
        this._voucher.quantity = quantity;
        return this
    }  
    description(description: String): VoucherBuilder {
        this._voucher.description = description;
        return this
    }  
     Build() : IVoucher {
        return this._voucher
    }
    async create() : Promise<IVoucher>{
        const data = {
            name: this._voucher.name,
            code: this._voucher.code,
            startDate: this._voucher.startDate,
            endDate: this._voucher.endDate,
            applyFor: this._voucher.applyFor,
            disocunt: this._voucher.discount,
            quantity: this._voucher.quantity,
            description: this._voucher.description
        }
    await Voucher.create(data)
    return this._voucher
    }
}
