import {Schema,model} from 'mongoose'

const User =  new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    phone: {
        type:String,
        unique:true
    }
}, {timestamps:true});
export default model('usuarios', User);