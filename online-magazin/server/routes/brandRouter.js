import {Router} from "express";
import brandController from "../controllers/brandController.js";
import checkRole from "../middleware/CheckRoleMiddleware.js";
const router = new Router()
router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.findAll)
router.delete('/', brandController.delete)
export default router