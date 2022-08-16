import React, { } from 'react';
import OrderListGame from '../OrderListGame/OrderListGame';
import './OrderList.css';

export default function OrderList({ orders, selectedOrder, setSelectedOrder }) {
  const orderListGames = orders.map(o =>
    <OrderListGame
      order={o}
      isSelected={o === selectedOrder}
      setSelectedOrder={setSelectedOrder}
      key={o._id}
    />
  );
  return (
    <main className="OrderList">
      {orderListGames}
    </main>
  );
}