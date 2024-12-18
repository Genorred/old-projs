import {Router} from "express";
import userController from "../controllers/userController.js";
import {AuthMiddleware} from "../middleware/AuthMiddleware.js";
const router = new Router()
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', AuthMiddleware, userController.check)
export default router