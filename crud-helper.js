require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Game = require('./models/game');
const Genre = require('./models/genre');
const Order = require('./models/order');
const Platform = require('./models/platform');

let user, item, category, order, platform;
let users, items, categories, orders, platforms;