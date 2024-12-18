import {Router} from "express";
import typeController from "../controllers/typeController.js";
import checkRole from "../middleware/CheckRoleMiddleware.js";
const router = new Router()
router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.findAll)
router.delete('/', typeController.delete)
export default router