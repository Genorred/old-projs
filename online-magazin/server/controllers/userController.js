import {Basket, User} from "../models/models.js";
import ApiError from "../error/ApiError.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {validationResult} from 'express-validator'
const generateJwtToken = (id, email, role) => {
    const payload = {
        id,
        email,
        role
    }
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '24h'})
}
class UserController {
    async registration (req, res, next) {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return next(ApiError.badRequest('email or password is empty', errors))
        }
        try{
            const {email, password, role} = req.body
            const candidate = await User.findOne({where: {email}})
            if(candidate){
                next(ApiError.badRequest('user already exists'))
            }
            const hashedPassword = await bcrypt.hash(password, 7)
            const user =  await User.create({email, role, password: hashedPassword})
            await Basket.create({
                userId: user.id
            })
            const token = generateJwtToken(user.id, email, user.role)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async login (req, res, next) {
        try{
            const {email, password} = req.body
            const candidate = await User.findOne({where: {email}})
            if(!candidate){
                return next(ApiError.internal('user was not found'))
            }
            const hashedPassword = candidate.password
            const passwordValidation = bcrypt.compareSync(password, hashedPassword)
            if(!passwordValidation){
                return next(ApiError.badRequest('password is not correct'))
            }
            console.log(candidate)
            const token = generateJwtToken(candidate.id, email, candidate.role)
            return res.json({token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    check (req, res, next) {
        try{
            const token = generateJwtToken(req.user.id, req.user.email, req.user.role)
            const id =req.user.id
            return res.json({token, id})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}
export default new UserController()