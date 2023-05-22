import { Schema, model } from "mongoose";
import departments from "../models/departments.js";
import doctors from "../models/doctors.js"

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
    department: {
        type: Schema.Types.ObjectId,
        require: false,
        ref: 'departments'
    },
    doctors: {
        type:Schema.Types.ObjectId,
        require:false,
        ref: 'deoctors'
    }
}, {timestamps:true})

export default model('subjects', subjects);