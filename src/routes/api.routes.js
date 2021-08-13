const express = require('express');
const ProductCtrl = require('../controllers/product.controller');
const SaleCtrl = require('../controllers/sale.controller');
const ShipCtrl = require('../controllers/shiping.controller');

const router = express.Router();

/* REST Product. */
router.get('/product/', ProductCtrl.list);
router.get('/product/:id', ProductCtrl.get);
router.post('/product/', ProductCtrl.create);
router.put('/product/:id', ProductCtrl.update);
router.delete('/product/:id', ProductCtrl.remove);

/* REST Sale. */
router.get('/sale/', SaleCtrl.list);
router.get('/sale/:id', SaleCtrl.get);
router.post('/sale/', SaleCtrl.create);

//shiping 
router.put('/ship', ShipCtrl.nextStep);
module.exports = router;