import {Basket, BasketDevice, Device} from "../models/models.js";

class basketService {
    async getBasket(userId) {
        const basket = await Basket.findOne({where: {userId}})
        return basket
    }

    async create(userId, deviceId) {
        const basket = await Basket.findOne({where: {userId}})
        const basketId = basket.id
        const item = await BasketDevice.create({
            deviceId,
            basketId,
        })
        return item
    }

    async increaseQuantity(userId, deviceId) {
        const basket = await Basket.findOne({where: {userId}})
        const basketId = basket.id
        const item = await BasketDevice.findOne({
            where: {
                deviceId,
                basketId
            }
        })
        const currentQtt = item.quantity
        // const updatedItem = item.update({quantity: sequalize.literal("quantity + 1")})
        const updatedItem = await item.update({quantity: currentQtt + 1})
        return updatedItem
    }

    async decreaseQuantity(userId, deviceId) {
        const basket = await Basket.findOne({where: {userId}})
        const basketId = basket.id
        const item = await BasketDevice.findOne({
            where: {
                deviceId,
                basketId
            }
        })
        const currentQtt = item.quantity
        // const updatedItem = item.update({quantity: sequalize.literal("quantity - 1")})
        const updatedItem = await item.update({quantity: currentQtt - 1})
        return updatedItem
    }

    async removeItem(userId, deviceId) {
        const basket = await Basket.findOne({where: {userId}})
        const basketId = basket.id
        await BasketDevice.destroy({where: {deviceId, basketId}})
    }

    async removeAllItems(userId) {
        const basket = await Basket.findOne({where: {userId}})
        const basketId = basket.id
        await BasketDevice.destroy({where: {basketId}})
    }

    async getItems(userId) {
        const basket = await Basket.findOne({where: {userId}})
        const basketDevices = await BasketDevice.findAll({where: {basketId: basket.id}})
        let items = []
        for (let i = 0; i < basketDevices.length; i++) {
            const basketDevice = basketDevices[i]
            const device = await Device.findOne({where: {id: basketDevice.deviceId}})
            items.push({device: device, quantity: basketDevice.quantity})
        }
        return items
    }
}

export default new basketService()