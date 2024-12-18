import {Router} from "express";
import authController from "./authController.js";
import {check} from "express-validator";
import authMiddleware from "./middlewares/authMiddleware.js";
import roleMiddleware from "./middlewares/roleMiddleware.js";
export const authRouter = new Router()
authRouter.post('/registration', [
    check('username', 'an username cannot be an empty').notEmpty(),
    check('password', 'a password length cannot be less than 4 or more than 10 letters ').isLength({min: 4, max: 10})
], authController.registration)
authRouter.post('/login', authController.login)
authRouter.get('/users', roleMiddleware('USER'), authController.getUsers)