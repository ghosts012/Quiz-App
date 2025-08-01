import { register as registerUser, login as loginUser } from "../services/user-service.js";
export const login = async (req, res) =>{
    const userObject =  req.body;
    try{
        const message = await loginUser(userObject);
        res.status(200).json({message:message});
    }
    catch(err){
        res.status(500).json({message:"Login Fail Server Crash.."});
        console.log(err);
    }
}
export const register = async (req, res) =>{
    console.log('Body:', req.body);
    const userObject =  req.body;
    try{
        const message = await registerUser(userObject);
        res.status(200).json({message : message});
    }
    catch(err){
        res.status(500).json({message : 'Error During Register, Server Crash'});
        console.log(err);
    }
}