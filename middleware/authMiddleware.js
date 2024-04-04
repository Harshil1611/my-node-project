// authMiddleware.js

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '').trim();
    console.log(token);
    if (!token) {
        return res.status(400).json({ error: 'Access denied' });
    }
    try {
        const decoded = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`);
        if (decoded) {
            console.log("successfully decoded...");
            next();
        }
    } catch (error) {
        console.log("Error in verification", error);
        return res.status(401).json("error!!!!");
    }
};

export { authenticate }; // Export the authenticate function
