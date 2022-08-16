import React, {  } from 'react';
import './MenuListGame.css';

export default function MenuListGame({ menuGame, handleAddToOrder }) {
  return (
    <div className="MenuListGame">
      <div className="emoji flex-ctr-ctr">{menuGame.emoji}</div>
      <div className="name">{menuGame.name}</div>
      <div className="buy">
        <span>${menuGame.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuGame._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}