import ApiError from "../error/ApiError.js";
import basketService from "../services/basketService.js";

class basketController {
    // async getBasket(req, res, next) {
    //     try {
    //         const userId = req.user.id
    //         const basket = basketService.getBasket(userId)
    //         return res.json(basket)
    //     }  catch (e) {
    //         next(ApiError.badRequest(e))
    //     }}
    async createItem(req, res, next) {
        try {
            const userId = req.user.id
            const {deviceId} = req.body
            const item = await basketService.create(userId, deviceId)
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async increaseItem(req, res, next) {
        try {
            console.log('1')
            const userId = req.user.id
            console.log('2')
            const {deviceId} = req.body
            const item = await basketService.increaseQuantity(userId, deviceId)
            console.log('3')
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async decreaseItem(req, res, next) {
        try {
            const userId = req.user.id
            const {deviceId} = req.body
            const item = await basketService.decreaseQuantity(userId, deviceId)
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async removeItem(req, res, next) {
        try {
            const userId = req.user.id
            const deviceId =  req.params.id
            const item = await basketService.removeItem(userId, deviceId)
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async removeAllItems(req, res, next) {
        try {
            const userId = req.user.id
            await basketService.removeAllItems(userId)
            return res.json({message: 'success'})
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async getItems(req, res, next) {
        try {
            const userId = req.user.id
            const items = await basketService.getItems(userId)
            console.log('monke moment');
            console.log(items)
            return res.json(items)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
}

export default new basketController()


