import { Schema, model } from "mongoose";
import departments from "./departments.js";
import doctors from "./doctors.js";

const subjects = new Schema({
    name: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: false
    },
    pdf: {
        type: String,
        require: false
    },
    departments: {
        type: Schema.Types.ObjectId,
        require: false,
        ref: 'departments'
    },
    doctors: {
        type: Schema.Types.ObjectId,
        require: false,
        ref: 'doctors'
    }
}, {timestamps:true})

export default model('subjects', subjects);