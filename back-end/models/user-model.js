import mongoose, { Schema, SchemaTypes } from 'mongoose';
const userSchema = new Schema({
    'email':{type:SchemaTypes.String, required:true, unique:true},
    'password':{type:SchemaTypes.String, minLength:8, required:true, unique:true},
    'name':{type:SchemaTypes.String, minLength:3},
    'userType':{type:SchemaTypes.String, required:true},
    'status':{type:SchemaTypes.String, default:'A'},
    'regDate':{type:SchemaTypes.Date, default:Date.now},
});
export const UserModel = mongoose.model('users', userSchema);