import { Schema, model } from "mongoose";
import departments from "../models/departments.js"

const doctors = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    department: {
        type: Schema.Types.ObjectId,
        require: false,
        ref: 'departments'
    }
}, {timestamps:true})

export default model('doctors', doctors);