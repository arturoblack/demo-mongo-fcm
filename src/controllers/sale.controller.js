const SaleModel = require('../models/sale.model');

exports.list = async function(req, res) {
    const sales = await SaleModel.find().exec();
    res.json(sales);
};

exports.get = async function(req, res) {
    const id = req.params.id;
    try {
        const product = await SaleModel.findById(id).exec();
        res.json(product);
    } catch (err) {
        res.json({error: err});
    }
};

exports.create = async function(req, res) {
    const newProduct = new SaleModel(req.body);
    await newProduct.save();
    res.json(newProduct);
};

exports.update = async function(req, res) {
    const id = req.params.id;
    await SaleModel.findByIdAndUpdate(id, req.body).exec();
    res.json({ok: 'ok'});
};

exports.remove = async function(req, res) {
    const id = req.params.id;
    await SaleModel.findByIdAndRemove(id).exec();
    res.json({ok: 'ok'});
};