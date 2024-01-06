import jwt from 'jsonwebtoken';

const login = async(req, res) => {
    const {email} = req.body;
    console.log(req.body);  
}

export default login;