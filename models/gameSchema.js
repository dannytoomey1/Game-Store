const Schema = require('mongoose').Schema;

const gameSchema = new Schema({
  name: { type: String, required: true },
  platforms: [{ type: String, required: true}],
  genre: { type: Schema.Types.ObjectId, ref: 'Genre' },
  price: { type: Number, required: true, default: 59.99 },
  developer: {type : String, required: true}
}, {
  timestamps: true
});

module.exports = gameSchema;
