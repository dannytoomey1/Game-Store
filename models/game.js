const mongoose = require('mongoose');

require('./genre');

const gameSchema = require('./gameSchema');

module.exports = mongoose.model('game', gameSchema);