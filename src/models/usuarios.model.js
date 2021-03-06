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
    },
    is_active: {
        type:Boolean,
        default: true
    },
    credit:{
        type:String
    },
    bank_account: {
        bank_name: {type:String},
        bank_code: {type:String},
        bank_agency: {type:String},
        bank_account: {type:String}
    }
}, {timestamps:true});
export default model('usuarios', User);