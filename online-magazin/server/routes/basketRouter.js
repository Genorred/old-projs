import {Router} from "express";
import basketController from "../controllers/basketController.js";
const router = new Router()
router.post('/create', basketController.createItem)
router.put('/increase', basketController.increaseItem)
router.put('/decrease', basketController.decreaseItem)
router.delete('/', basketController.removeAllItems)
router.delete('/:id', basketController.removeItem)
router.get('/', basketController.getItems)
export default router
