import { Schema, model } from "mongoose";

const doctors = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
}, {timestamps:true})

export default model('doctors', doctors);