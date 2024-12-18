import {Router} from "express";
import ratingController from "../controllers/ratingController.js";
import {AuthMiddleware} from "../middleware/AuthMiddleware.js";
const router = new Router()
router.post('/', AuthMiddleware,  ratingController.addOne)
router.put('/', AuthMiddleware,  ratingController.changeOne)
router.delete('/', AuthMiddleware, ratingController.removeUserAll)
router.delete('/:deviceId', AuthMiddleware,  ratingController.removeOne)
router.get('/:deviceId', ratingController.getAll)
router.get('/', AuthMiddleware, ratingController.getUserAll)
export default router