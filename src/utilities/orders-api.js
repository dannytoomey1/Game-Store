import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addGameToCart(gameId) {
  return sendRequest(`${BASE_URL}/cart/games/${gameId}`, 'POST');
}

export function setGameQtyInCart(gameId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { gameId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}


