import React, { } from 'react';
import './PlatformList.css';

export default function PlatformList({ activePlat, setActivePlat }) {
    const platforms = [
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
        {name: 'DS', sortOrder: 130},
        {name: '3DS', sortOrder: 140},
        {name: 'All', sortOrder: 150}
    ];

  const plats = platforms.map(plat =>
    <li
      key={plat.name}
      className={plat.name === activePlat.name ? 'active' : ''}
      onClick={() => setActivePlat(plat)}
    >
      {plat.name}
    </li>
  );
  return (
    <ul className="PlatformList">
      {plats}
    </ul>
  );
}