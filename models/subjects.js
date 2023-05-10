import { Schema, model } from "mongoose";

const subjects = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: false
    },
    pdf: {
        type: String,
        required: false
    },
    department: {
        type: Schema.Types.ObjectId,
        required: false,
        ref: 'departments'
    }
    
}, {timestamps:true})

export default model('subjects', subjects);