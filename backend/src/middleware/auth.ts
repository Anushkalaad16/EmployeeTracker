import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


export interface AuthRequest extends Request{

        user?:any;

}

const authMiddleware = (
    req:AuthRequest,
    res:Response,
    next:NextFunction
) =>{
    try{
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({msg:"No token"})
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );
        req.user =  decoded;
        next();
    }catch(error){
        res.status(401).json({msg:"Invalid token"});
    }
};

export default authMiddleware;

