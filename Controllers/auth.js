import jwt from 'jsonwebtoken';
import Users from '../Models/User.js';

const login = async(req, res) => {
    const {email} = req.body;
    console.log(req.body);  
    try {
        const existingUser = await Users.findOne({email});
    }
    catch{

    }
}

export default login;