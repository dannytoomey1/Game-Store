require('dotenv').config();
require('./config/database');

const Genre = require('./models/genre');
const Game = require('./models/game');
const Platform = require('./models/platform');

(async function() {

  await Genre.deleteMany({});
  const genres = await Genre.create([
    {name: 'Action/Adventure', sortOrder: 10},
    {name: 'WRPG', sortOrder: 20},
    {name: 'JRPG', sortOrder: 30},
    {name: 'Racing', sortOrder: 40},
    {name: 'Character Action', sortOrder: 50},
    {name: 'Rhythm', sortOrder: 60},
    {name: 'Fighting', sortOrder: 70},
    {name: 'FPS', sortOrder: 80},
    {name: 'Visual Novel', sortOrder: 90}
  ]);

  await Platform.deleteMany({});
  const platforms = await platform.create([
    {name: 'PC', sortOrder: 10},
    {name: 'PS4', sortOrder: 20},
    {name: 'Switch', sortOrder: 30},
    {name: 'Xbox One', sortOrder: 40},
    {name: 'PS3', sortOrder: 50},
    {name: 'Xbox 360', sortOrder: 60},
    {name: 'Wii U', sortOrder: 70},
    {name: 'Gamecube', sortOrder: 80},
    {name: 'PS2', sortOrder: 90},
    {name: 'Xbox', sortOrder: 100},
    {name: 'PSP', sortOrder: 110},
    {name: 'PS Vita', sortOrder: 120},
    {name: 'DS', sortOrder: 130}
    {name: '3DS', sortOrder: 140}
  ]);

  await Game.deleteMany({});
  const games = await Game.create([
    {name: 'Super Smash Bros Melee', platforms: [platforms[7]], genre: genres[6], price: 69.99, developer: "Nintendo"},
    {name: 'Persona 4', platforms: [platforms[8], platforms[11], platforms[0]], genre: genres[2], price: 19.99, developer: "Atlus"},
    {name: 'Persona 3', platforms: [platforms[8], platforms[10]], genre: genres[2], price: 14.99, developer: "Atlus"},
    {name: 'The Elder Scrolls III: Morrowind', platforms: [platforms[0], platforms[9]], genre: genres[1], price: 14.99, developer: "Bethesda"},
    {name: 'The Elder Scrolls IV: Oblivion', platforms: [platforms[0], platforms[5], platforms[4]], genre: genres[1], price: 19.99, developer: "Bethesda"},
    {name: 'The Elder Scrolls V: Skyrim', platforms: [platforms[0], platforms[5], platforms[4], platforms[1], platforms[3], platforms[2]], genre: genres[1], price: 39.99, developer: "Bethesda"},
    {name: 'Persona 5', platforms: [platforms[1], platforms[4]], genre: genres[2], price: 14.99, developer: "Atlus"},
    {name: 'Mass Effect', platforms: [platforms[0], platforms[5], platforms[4]], genre: genres[1], price: 19.99, developer: "Bioware"},
    {name: 'Mass Effect 2', platforms: [platforms[0], platforms[5], platforms[4]], genre: genres[1], price: 19.99, developer: "Bioware"},
    {name: 'Mass Effect 3', platforms: [platforms[0], platforms[5], platforms[4]], genre: genres[1], price: 29.99, developer: "Bioware"},
    {name: 'Mass Effect: Legendary Edition', platforms: [platforms[0], platforms[1], platforms[3]], genre: genres[1], price: 59.99, developer: "Bioware"},
    {name: 'Mario Kart 8', platforms: [platforms[6], platforms[2]], genre: genres[3], price: 49.99, developer: "Nintendo"},
    {name: 'Bayoneta 2', platforms: [platforms[6], platforms[2]], genre: genres[4], price: 44.99, developer: "Platinum"},
    {name: 'DJMAX RESPECT V', platforms: [platforms[0], platforms[1], platforms[3]], genre: genres[5], price: 49.99, developer: "Neowiz"},
    {name: 'The Legend of Zelda: Breath of The Wild', platforms: [platforms[6], platforms[2]], genre: genres[0], price: 49.99, developer: "Nintendo"},
    {name: 'The Legend of Zelda: The Wind Waker', platforms: [platforms[7], platforms[6]], genre: genres[0], price: 79.99, developer: "Nintendo"},
    {name: 'Kid Icarus: Uprising', platforms: [platforms[13]], genre: genres[0], price: 89.99, developer: "Sora"},
    {name: 'Kingdom Hearts 1.5 + 2.5 HD Remix', platforms: [platforms[0], platforms[1], platforms[3]], genre: genres[2], price: 25.99, developer: "Square Enix"},
    {name: 'Crulety Squad', platforms: [platforms[0]], genre: genres[7], price: 19.99, developer: "Consumer Softproducts"},
    {name: 'Phoenix Wright: Ace Attorney', platforms: [platforms[12], platforms[13], platforms[0], platforms[2]], genre: genres[8], price: 14.99, developer: "Capcom"},
    {name: 'Danganronpa', platforms: [platforms[10], platforms[11], platforms[0], platforms[1], platforms[2]], genre: genres[8], price: 19.99, developer: "Spike Chunsoft"},
    {name: 'Yakuza 6', platforms: [platforms[1], platforms[3], platforms[0]], genre: genres[0], price: 19.99, developer: "Ryu ga Gotoku"},
  ]);

  console.log(games)

  process.exit();

})();