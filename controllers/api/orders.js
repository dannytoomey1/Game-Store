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
  // get orders for the logged in user
  const orders = await Order.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(orders);
}

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// Add an game to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addGameToCart(req.params.id);
  res.json(cart);
}

// Updates an game's qty in the cart
async function setGameQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setGameQty(req.body.gameId, req.body.newQty);
  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
