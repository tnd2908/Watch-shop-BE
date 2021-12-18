import { model, Schema } from "mongoose";
import { type } from "os";

const productSchema: Schema = new Schema({
    name: {
        required: true, 
        type: String
    },
    price: {
        required: true, 
        type: Number
    },
    images:{
        type: [String],
        required: true
    },
    weight: {
        required: true,
        type: String
    },
    size: {
        required: true,
        type: String
    },
    material:{
        require: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    category:{
        required: true,
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    saled:{
        type: Number,
        default: 0
    },
    color: {
        required: true,
        type: String
    },
    quantity: {
        required: true,
        type: Number
    },
    saleOf: {
        type: Number,
        default: 0
    },
    status:{
        type: String,
        required: true
    },
    comment: {
        type: [
           {userId: {
               type: Schema.Types.ObjectId,
               required: true,
               ref: 'user'
           },
            userComment:{
                type: String,
                required: true
            },
            userName: {
                type: String,
                required: true
            },
            star:{
                type: Number,
                required: true
            },
            createAt:{
                type: Date,
                default: Date.now
            },
            reply: {
                type: [String],
                required: false
            }}
        ],
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})
const Product = model('Product', productSchema)
export default Product