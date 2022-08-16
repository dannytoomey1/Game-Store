import React, {  } from 'react';
import './MenuListGame.css';

export default function MenuListGame({ menuGame, handleAddToOrder,}) {
  return (
    <div className="MenuListGame">
      <div className="emoji flex-ctr-ctr">{menuGame.emoji}</div>
      <div className="name">{menuGame.name}</div>
      <div className="buy">
        <span>${menuGame.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuGame._id)}>
          Add to Cart
        </button>
      </div>
      <ul>
        <li>Developer: {menuGame.developer}</li>
        <li>Platforms: {menuGame.platforms.slice(0, menuGame.platforms.length - 1).toString()}</li>
      </ul>
    </div>
  );
}