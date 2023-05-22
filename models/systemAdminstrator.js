import { Int32 } from "bson";
import { Schema,model } from "mongoose";

const systemAdminstrator = new Schema({
    name:{
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
    }
})