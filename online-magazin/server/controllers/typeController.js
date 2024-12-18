import {Type} from "../models/models.js";

class typeController {
    async create (req, res) {
        try{
            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async findAll (req, res) {
        try{
            const types = await Type.findAll()
            return res.json(types)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete (req, res) {
        try{

        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new typeController()