import * as uuid from "uuid";
import {Device, DeviceInfo} from "../models/models.js";
import path from "node:path";
import ApiError from "../error/ApiError.js";


class deviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve('static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});
            info = JSON.parse(info)
            info.forEach(i => {
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                })
            })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }






    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        if (brandId){
            brandId = Number(brandId)
        }
        if (typeId){
            typeId = Number(typeId)
        }
        let offset = page * limit - limit
        let devices;
        console.log(page)
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    async findOne(req, res, next) {
        try {
            const {id} = req.params
            const device = await Device.findOne(
                {
                    where: {id},
                    include: [{model: DeviceInfo, as: 'info'}]
                }
                )
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

export default new deviceController()