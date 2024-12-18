import ApiError from "../error/ApiError.js";
import {Rating} from "../models/models.js";

class ratingController {
    async addOne(req, res, next) {
        try {
            const {deviceId, rate, review} = req.body
            const userId = req.user.id
            const isExist = await Rating.findOne({where: { userId, deviceId}})
                if(isExist) {
                    return next(ApiError.badRequest({message: 'rating already exist, you can update it'}))
                }
            const item = await Rating.create({
                deviceId,
                userId,
                rate,
                review
            })
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async changeOne(req, res, next) {
        try {
            const {deviceId, rate, review} = req.body
            const userId = req.user.id
            let currentRating = await Rating.findOne({
                where: {
                    deviceId,
                    userId
                }
            })
            currentRating = await currentRating.update({
                rate,
                review
            })
            return res.json(currentRating)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async removeOne(req, res, next) {
        try {
            const deviceId = req.params.id
            const userId = req.user.id
            await Rating.destroy({where: {deviceId, userId}})
            return res.json({message: 'success'})
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async removeUserAll(req, res, next) {
        try {
            const userId = req.user.id
            await Rating.destroy({where: {userId}})
            return res.json({message: 'success'})
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async getAll(req, res, next) {
        try {
            const {deviceId} = req.params
            const rating = await Rating.findAll({where: {deviceId}})
            return res.json(rating)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
    async getUserAll(req, res, next) {
        try {
            const userId = req.user.id
            const rating = await Rating.findAll({where: {userId}})
            return res.json(rating)
        } catch (e) {
            next(ApiError.badRequest(e))
        }
    }
}

export default new ratingController()