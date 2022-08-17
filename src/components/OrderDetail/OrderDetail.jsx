import React, { } from 'react';
import './OrderDetail.css';
import LineGame from '../LineGame/LineGame';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineGames = order.lineGames.map(game =>
    <LineGame
      lineGame={game}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={game._id}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-game-container flex-ctr-ctr flex-col scroll-y">
        {lineGames.length ?
          <>
            {lineGames}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineGames.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
           :
           <div className="hungry">Wanna Play?</div>
        }      
      </div>
    </div>
  );
}