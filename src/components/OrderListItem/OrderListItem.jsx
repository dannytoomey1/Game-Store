import './OrderListItem.css';

export default function OrderListItem({ order }) {
  return (
    <div class="OrderListItem">
      <div>
        <div>Order Id: <span class="smaller">{order.orderId}</span></div>
        <div class="smaller">{new Date(order.createdAt).toLocaleDateString()}</div>
      </div>
      <div class="align-rt">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div class="smaller">{order.totalQty} Items</div>
      </div>
    </div>
  );
}