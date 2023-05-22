import { Schema, SchemaType, model } from "mongoose";
import departments from "../models/departments.js"

const students = new Schema({
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
    },
    academicNum: {
        type:String,
        require:true,
    }
}, {timestamps:true})

export default model('students', students);