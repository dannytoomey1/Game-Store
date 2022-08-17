const Order = require('../../models/order');
const Game = require('../../models/game');

module.exports = {
  cart,
  addToCart,
  setGameQtyInCart,
  checkout,
  forUser
};

async function forUser(req, res) {
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}

async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addGameToCart(req.params.id);
  res.json(cart);
}

async function setGameQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setGameQty(req.body.gameId, req.body.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
