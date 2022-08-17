require('dotenv').config();
require('./config/database');

const Genre = require('./models/genre');
const Game = require('./models/game');

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
    {name: 'Super Smash Bros Melee', platforms: ["Gamecube", "All"], genre: genres[6], price: 69.99, developer: "Nintendo", image: "", image: "https://upload.wikimedia.org/wikipedia/en/7/75/Super_Smash_Bros_Melee_box_art.png"},
    {name: 'Persona 4', platforms: ["PS2", "PS Vita", "PC", "All"], genre: genres[2], price: 19.99, developer: "Atlus", image: "", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Shin_Megami_Tensei_Persona_4.jpg/220px-Shin_Megami_Tensei_Persona_4.jpg"},
    {name: 'Persona 3', platforms: ["PS2", "PSP", "All"], genre: genres[2], price: 14.99, developer: "Atlus", image: "https://upload.wikimedia.org/wikipedia/en/4/47/Persona3cover.jpg"},
    {name: 'The Elder Scrolls III: Morrowind', platforms: ["PC", "Xbox", "All"], genre: genres[1], price: 14.99, developer: "Bethesda", image: "https://cdn2.spong.com/pack/t/h/theeldersc399902l/_-The-Elder-Scrolls-III-Morrowind-Game-of-the-Year-Edition-PC-_.jpg"},
    {name: 'The Elder Scrolls IV: Oblivion', platforms: ["PC", "Xbox 360", "PS3", "All"], genre: genres[1], price: 19.99, developer: "Bethesda", image: "https://www.mobygames.com/images/covers/l/243528-the-elder-scrolls-iv-oblivion-game-of-the-year-edition-xbox-360-front-cover.jpg"},
    {name: 'The Elder Scrolls V: Skyrim', platforms: ["PC", "PS3", "Xbox 360", "PS4", "Xbox One", "Switch", "All"], genre: genres[1], price: 39.99, developer: "Bethesda", image: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png"},
    {name: 'Persona 5', platforms: ["PS4", "PS3", "All"], genre: genres[2], price: 14.99, developer: "Atlus", image: "https://pbs.twimg.com/media/ChspnMXVAAAiF6B.jpg"},
    {name: 'Mass Effect', platforms: ["PC", "Xbox 360", "PS3", "All"], genre: genres[1], price: 19.99, developer: "Bioware", image: "https://upload.wikimedia.org/wikipedia/en/e/e8/MassEffect.jpg"},
    {name: 'Mass Effect 2', platforms: ["PC", "Xbox 360", "PS3", "All"], genre: genres[1], price: 19.99, developer: "Bioware", image: "https://upload.wikimedia.org/wikipedia/en/0/05/MassEffect2_cover.PNG"},
    {name: 'Mass Effect 3', platforms: ["PC", "Xbox 360", "PS3", "All"], genre: genres[1], price: 29.99, developer: "Bioware", image: "https://upload.wikimedia.org/wikipedia/en/b/b0/Mass_Effect_3_Game_Cover.jpg"},
    {name: 'Mass Effect: Legendary Edition', platforms: ["PC", "PS4", "Xbox One", "All"], genre: genres[1], price: 59.99, developer: "Bioware", image: "https://www.gamespew.com/wp-content/uploads/2021/05/cover.jpg"},
    {name: 'Mario Kart 8', platforms: ["Wii U", "Switch", "All"], genre: genres[3], price: 49.99, developer: "Nintendo", image: "https://mms.businesswire.com/media/20140529005545/en/417877/5/MK8_Box_Art.jpg"},
    {name: 'Bayoneta 2', platforms: ["Wii U", "Switch", "All"], genre: genres[4], price: 44.99, developer: "Platinum", image: "https://www.mobygames.com/images/covers/l/568167-bayonetta-2-nintendo-switch-front-cover.jpg"},
    {name: 'DJMAX RESPECT V', platforms: ["PC", "PS4", "Xbox One", "All"], genre: genres[5], price: 49.99, developer: "Neowiz", image: "https://s3.gaming-cdn.com/images/products/6659/orig-fallback-v1/djmax-respect-v-pc-game-steam-cover.jpg?v=1651572370"},
    {name: 'The Legend of Zelda: Breath of The Wild', platforms: ["Wii U", "Switch", "All"], genre: genres[0], price: 49.99, developer: "Nintendo", image: "https://images.nintendolife.com/44d04b723c965/najp.900x.jpg"},
    {name: 'The Legend of Zelda: The Wind Waker', platforms: ["Gamecube", "Wii U", "All"], genre: genres[0], price: 79.99, developer: "Nintendo", image: "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/b/b7/Windwakerbox.jpg"},
    {name: 'Kid Icarus: Uprising', platforms: ["3DS", "All"], genre: genres[0], price: 89.99, developer: "Sora", image: "https://m.media-amazon.com/images/I/61BOaqZQgWL._SX385_.jpg"},
    {name: 'Kingdom Hearts 1.5 + 2.5 HD Remix', platforms: ["PC", "PS4", "Xbox One", "All"], genre: genres[2], price: 25.99, developer: "Square Enix", image: "https://gematsu.com/wp-content/uploads/2017/01/KH-15-25-Remix-Box-Art_01-31-17.jpg"},
    {name: 'Crulety Squad', platforms: ["PC", "All"], genre: genres[7], price: 19.99, developer: "Consumer Softproducts", image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/abb687286af099b8822bd546213dc79c.jpg"},
    {name: 'Phoenix Wright: Ace Attorney', platforms: ["DS", "3DS", "PC", "Switch", "All"], genre: genres[8], price: 14.99, developer: "Capcom", image: "https://upload.wikimedia.org/wikipedia/en/7/73/Phoenix_Wright_-_Ace_Attorney_Coverart.png"},
    {name: 'Danganronpa', platforms: ["PS Vita", "PSP", "PC", "PS4", "Switch", "All"], genre: genres[8], price: 19.99, developer: "Spike Chunsoft", image: "https://howlongtobeat.com/games/Danganronpaboxart.jpg"},
    {name: 'Yakuza 6', platforms: ["PS4", "Xbox One", "PC", "All"], genre: genres[0], price: 19.99, developer: "Ryu ga Gotoku", image: "https://m.media-amazon.com/images/I/81IhCZCA2HL._SL1500_.jpg"}
  ]);

  console.log(games)
  process.exit();
})();