import jwt from 'jsonwebtoken';
import Users from '../Models/User.js';

const login = async (req, res) => {
    const { email } = req.body;
    console.log(email);
    try {
        const existingUser = await Users.findOne({ email });
        if (!existingUser) {
            try {
                const newUser = await Users.create({ email })
                const token = jwt.sign({
                    email: newUser.email, id: newUser._id
                }, process.env.JWT_SECRET, {
                    expiresIn: "1h"
                })
                res.status(200).json({ result: newUser, token })
            } catch (error) {
                res.status(500).json({ message: "somthing wents wrong..." })
            }
        }
        else {
            const token = jwt.sign({
                email: existingUser.email, id: existingUser._id
            }, process.env.JWT_SECRET, {
                expiresIn: "1h"
            })
            res.status(200).json({ result: existingUser, token })
        }
    }
    catch {
        res.status(500).json({message: "somting wents wrong ..."})
    }
}

export default login;