import {Router} from "express";
import typeRouter from "./typeRouter.js";
import brandRouter from "./brandRouter.js";
import deviceRouter from "./deviceRouter.js";
import userRouter from "./userRouter.js";
import {check} from 'express-validator'
import ratingRouter from "./ratingRouter.js";
import basketRouter from "./basketRouter.js";
import {AuthMiddleware} from "../middleware/AuthMiddleware.js";
const router = new Router()
router.use('/user', [
    check('email', 'email can not be an empty').notEmpty(),
    check('password', 'password can not be an empty').notEmpty()
], userRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/rating', ratingRouter)
router.use('/basket', AuthMiddleware, basketRouter)
export default router