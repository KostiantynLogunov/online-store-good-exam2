const {Brand} = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const {name} = req.body;
        const newBrand = await Brand.create({name});

        return res.json(newBrand);
    }

    async getAll(req, res) {
        const allBrands = await Brand.findAll();

        return res.json(allBrands);
    }
}

module.exports = new BrandController();