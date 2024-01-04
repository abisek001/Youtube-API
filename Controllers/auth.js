import jwt from 'jsonwebtoken';

export const login = async(req, res) => {
    const {email} = req.body;
    console.log(req.body);  
}