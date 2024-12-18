import jwt from "jsonwebtoken";
import {secret} from "../config.js";

const authMiddleware = (req, res, next) => {
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        req.user = jwt.verify(token, secret)
        next()
    } catch (e) {
        return res.status(401).json({message: 'user is not authorized'})
    }
}
export default authMiddleware