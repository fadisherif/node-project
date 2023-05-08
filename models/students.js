import { Schema, model } from "mongoose";

const students = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
}, {timestamps:true})

export default model('students', students);