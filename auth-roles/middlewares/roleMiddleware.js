import jwt from "jsonwebtoken";
import {secret} from "../config.js";

const roleMiddleware = (roles) => {
    return (req, res, next) => {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return res.status(403).json({message: 'not auther'})
            }
            const {roles: userRoles} = jwt.verify(token, secret)
            let hasRole = false
            userRoles.forEach(role=>{
                if(roles.includes(role)){
                    hasRole = true
                }
            })
            if(!hasRole){
                return res.status(403).json({message: 'you havent an access'})
            }
            next()
        } catch (e) {
            return res.status(403).json({message: 'user is not authorized'})
        }
    }
}
export default roleMiddleware