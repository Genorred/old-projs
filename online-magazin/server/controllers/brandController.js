import {Brand} from "../models/models.js";

class brandController {
    async create (req, res) {
        try{
            const {name} = req.body
            const brand = await Brand.create({name})
            return res.json(brand)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async findAll (req, res) {
        try{
            const brands = await Brand.findAll()
            return res.json(brands)
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
export default new brandController()