import { Int32 } from "bson";
import { Schema,model } from "mongoose";

const systemAdminstrator = new Schema({
    name:{
        type: String,
        required: true
    },
    id: {
        type: Int32,
        required: true
    }
})