export const login = (req, res) =>{
    res.json({message : 'Login'});
}
export const register = (req, res) =>{
    // console.log(req.body);
    console.log('Method:', req.method);
    console.log('Path:', req.path);
    console.log('Body:', req.body);
    res.json({message : 'Register'});
}