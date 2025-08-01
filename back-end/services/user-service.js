import { UserModel } from "../models/user-model.js"
import { compareHash, encryptPassword } from "../utils/services/password-hash.js";

export const register = async(userObject)=>{
    try{
        userObject.password = encryptPassword(userObject.password);
        const doc = await UserModel.create(userObject);
        if( doc && doc.id ){
            return "User Register SuccessFully";
        }
    }
    catch(err){
        throw err;
    }
}
export const login = async (userObject)=>{
    try{
        // this will return a promise and not a callback
        const doc = await UserModel.findOne({email:userObject.email}).exec();
        if( doc && doc.email){
            if( compareHash(userObject.password, doc.password)){
                return "Welcome "+doc.name;
            }
            else{
                return "Invalid Email or Password"
            }
        }
        else{
            return "Invalid Email or Password"
        }
    }
    catch(err){
        throw err;
    }
}