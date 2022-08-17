const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');


router.get('/cart', ordersCtrl.cart);
router.get('/user', ordersCtrl.forUser);
router.post('/cart/games/:id', ordersCtrl.addToCart);
router.post('/cart/checkout', ordersCtrl.checkout);
router.put('/cart/qty', ordersCtrl.setGameQtyInCart);

module.exports = router;
