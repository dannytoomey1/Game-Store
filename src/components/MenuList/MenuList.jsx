import React, { } from 'react';
import './MenuList.css';
import MenuListGame from '../MenuListGame/MenuListGame';

export default function MenuList({ menuGames, handleAddToOrder}) {
  const games = menuGames.map(game =>
    <MenuListGame
      key={game._id}
      menuGame={game}
      handleAddToOrder={handleAddToOrder}    
    />
  );
  return (
    <main className="MenuList">
      {games}
    </main>
  );
}