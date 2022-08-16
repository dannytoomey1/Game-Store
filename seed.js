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

  

  await Game.deleteMany({});
  const games = await Game.create([
    {name: 'Super Smash Bros Melee', platforms: ["Gamecube", "All"], genre: genres[6], price: 69.99, developer: "Nintendo"},
    {name: 'Persona 4', platforms: ["PS2", "PS Vita", "PC", "All"], genre: genres[2], price: 19.99, developer: "Atlus"},
    {name: 'Persona 3', platforms: ["PS2", "PSP", "All"], genre: genres[2], price: 14.99, developer: "Atlus"},
    {name: 'The Elder Scrolls III: Morrowind', platforms: ["PC", "Xbox", "All"], genre: genres[1], price: 14.99, developer: "Bethesda"},
    {name: 'The Elder Scrolls IV: Oblivion', platforms: ["PC", "Xbox 360", "PS3", "All"], genre: genres[1], price: 19.99, developer: "Bethesda"},
    {name: 'The Elder Scrolls V: Skyrim', platforms: ["PC", "PS3", "Xbox 360", "PS4", "Xbox One", "Switch", "All"], genre: genres[1], price: 39.99, developer: "Bethesda"},
    {name: 'Persona 5', platforms: ["PS4", "PS3", "All"], genre: genres[2], price: 14.99, developer: "Atlus"},
    {name: 'Mass Effect', platforms: ["PC", "Xbox 360", "PS3", "All"], genre: genres[1], price: 19.99, developer: "Bioware"},
    {name: 'Mass Effect 2', platforms: ["PC", "Xbox 360", "PS3", "All"], genre: genres[1], price: 19.99, developer: "Bioware"},
    {name: 'Mass Effect 3', platforms: ["PC", "Xbox 360", "PS3", "All"], genre: genres[1], price: 29.99, developer: "Bioware"},
    {name: 'Mass Effect: Legendary Edition', platforms: ["PC", "PS4", "Xbox One", "All"], genre: genres[1], price: 59.99, developer: "Bioware"},
    {name: 'Mario Kart 8', platforms: ["Wii U", "Switch", "All"], genre: genres[3], price: 49.99, developer: "Nintendo"},
    {name: 'Bayoneta 2', platforms: ["Wii U", "Switch", "All"], genre: genres[4], price: 44.99, developer: "Platinum"},
    {name: 'DJMAX RESPECT V', platforms: ["PC", "PS4", "Xbox One", "All"], genre: genres[5], price: 49.99, developer: "Neowiz"},
    {name: 'The Legend of Zelda: Breath of The Wild', platforms: ["Wii U", "Switch", "All"], genre: genres[0], price: 49.99, developer: "Nintendo"},
    {name: 'The Legend of Zelda: The Wind Waker', platforms: ["Gamecube", "Wii U", "All"], genre: genres[0], price: 79.99, developer: "Nintendo"},
    {name: 'Kid Icarus: Uprising', platforms: ["3DS", "All"], genre: genres[0], price: 89.99, developer: "Sora"},
    {name: 'Kingdom Hearts 1.5 + 2.5 HD Remix', platforms: ["PC", "PS4", "Xbox One", "All"], genre: genres[2], price: 25.99, developer: "Square Enix"},
    {name: 'Crulety Squad', platforms: ["PC", "All"], genre: genres[7], price: 19.99, developer: "Consumer Softproducts"},
    {name: 'Phoenix Wright: Ace Attorney', platforms: ["DS", "3DS", "PC", "Switch", "All"], genre: genres[8], price: 14.99, developer: "Capcom"},
    {name: 'Danganronpa', platforms: ["PS Vita", "PSP", "PC", "PS4", "Switch", "All"], genre: genres[8], price: 19.99, developer: "Spike Chunsoft"},
    {name: 'Yakuza 6', platforms: ["PS4", "Xbox One", "PC", "All"], genre: genres[0], price: 19.99, developer: "Ryu ga Gotoku"},
  ]);

  console.log(games)

  process.exit();

})();