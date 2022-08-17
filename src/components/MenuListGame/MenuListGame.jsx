import React, {  } from 'react';
import './MenuListGame.css';

export default function MenuListGame({ menuGame, handleAddToOrder,}) {
  return (
    <div className="MenuListGame">
      <img class="image" src={menuGame.image} alt="art"></img>
      <div className="buy">
        <div className="buy">{menuGame.name}</div>
        <span>${menuGame.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuGame._id)}>
          Add to Cart
        </button>
      </div>
      <ul className='details'>
        <li>Developer: {menuGame.developer}</li>
        <li>Platforms: {menuGame.platforms.slice(0, menuGame.platforms.length - 1).toString()}</li>
      </ul>
    </div>
  );
}