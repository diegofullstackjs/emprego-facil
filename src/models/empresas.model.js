import {Schema,model} from 'mongoose'

const Empresas =  new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type:String,
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
    cnpj: {
        type:String,
        required: true,
        unique: true
    },
    credit_card: {
        name: {type:String},
        number: {type:String},
        cvc: {type:String},
        expired: {type:String}
    },
    is_active: {
        type:Boolean,
        default: true
    }
}, {timestamps:true});
export default model('empresas', Empresas);