import { Schema, model } from "mongoose";
import department from "../models/departments.js"

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
        type: String,
        required: true
    }
    
}, {timestamps:true})

export default model('subjects', subjects);