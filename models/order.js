const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const gameSchema = require('./gameSchema');

const lineGameSchema = new Schema({
  qty: { type: Number, default: 1 },
  game: gameSchema
}, {
  toJSON: { virtuals: true }
});

lineGameSchema.virtual('extPrice').get(function() { 
  return this.qty * this.game.price;
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineGames: [lineGameSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineGames.reduce((total, game) => total + game.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineGames.reduce((total, game) => total + game.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

orderSchema.methods.addGameToCart = async function(gameId) {
  const cart = this;
  const lineGame = cart.lineGames.find(lineGame => lineGame.game._id.equals(gameId));
  if (lineGame) {
    lineGame.qty += 1;
  } else {
    const game = await mongoose.model('game').findById(gameId);
    cart.lineGames.push({ game });
  }
  return cart.save();
}

orderSchema.methods.setGameQty = function(gameId, newQty) {
  const cart = this;
  const lineGame = cart.lineGames.find(lineGame => lineGame.game._id.equals(gameId));
  if (lineGame && newQty <= 0) {
    lineGame.remove();
  } else if (lineGame) {
    lineGame.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);