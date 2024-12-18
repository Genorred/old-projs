import User from "./models/User.js";
import Role from "./models/Role.js";
import bcrypt from "bcrypt";
import {validationResult} from "express-validator";
import jwt from 'jsonwebtoken'
import {secret} from "./config.js";
const generateAccessToken = (id, roles) =>{
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}
class userController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: 'username or password isnot a valid', errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(candidate){
                return res.status(400).json('User with this username already exists')
            }
                const userRole = await Role.findOne({value: "USER"})
                const hashedPassword = bcrypt.hashSync(password, 7)
                await User.create({username, password: hashedPassword, roles: [userRole.value]})
                return res.json({message: 'the user was successfully registered'})

        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'})
        }
    }
    async login(req, res) {
        try {
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(!candidate){
                return res.json({message: 'user does not exist'})
            }
            const validPassword = bcrypt.compareSync(password, candidate.password)
            if(!validPassword){
                return res.json({message: 'password is not valid'})
            }
            const token = generateAccessToken(candidate._id, candidate.roles)
            res.json({token})
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'})
        }
    }
    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'})
        }
    }
}
export default new userController()