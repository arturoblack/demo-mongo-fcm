const ProductModel = require('../models/product.model');

exports.list = async function(req, res) {
    const products = await ProductModel.find().exec();
    res.json(products);
};

exports.get = async function(req, res) {
    const id = req.params.id;
    try {
        const product = await ProductModel.findById(id).exec();
        res.json(product);
    } catch (err) {
        res.json({error: err});
    }
};

exports.create = async function(req, res) {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.json(newProduct);
};

exports.update = async function(req, res) {
    const id = req.params.id;
    await ProductModel.findByIdAndUpdate(id, req.body).exec();
    res.json({ok: 'ok'});
};

exports.remove = async function(req, res) {
    const id = req.params.id;
    await ProductModel.findByIdAndRemove(id).exec();
    res.json({ok: 'ok'});
};