import {model, Schema} from "mongoose";
const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles: [{type: String, Ref: 'Role'}]
    }
)
export default model('User', User)