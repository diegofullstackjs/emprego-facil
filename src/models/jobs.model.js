import {model,Schema} from 'mongoose';

const Jobs = new Schema({
    empresa_id: {
        type:Schema.Types.ObjectId,
        ref: "empresas"
    },
    title: {type:String,required: true},
    description:{type:String,required: true},
    date:{type:Date,required:true},
    hours:{type:Number,default: 1,required:true},
    per_hour: {type:String,required:true}
},{timestamps:true});

export default model("jobs",Jobs)