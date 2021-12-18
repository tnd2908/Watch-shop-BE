import mongoose, {Schema, model} from 'mongoose'

const colorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    }
})
const Color = model('color', colorSchema)
export default Color;