import React, { useState, useEffect, useRef } from 'react';
import * as gamesAPI from '../../utilities/games-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  // If your state will ultimately be an array, ALWAYS
  // initialize to an empty array
  const [menuGames, setMenuGames] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getGames() {
      const games = await gamesAPI.getAll();
      categoriesRef.current = [...new Set(games.map(game => game.category.name))];
      setMenuGames(games);
      setActiveCat(categoriesRef.current[0]);
    }
    getGames();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  // An empty dependency array results in the effect
  // function running ONLY after the FIRST render
  
  /*-- Event Handlers --*/
  async function handleAddToOrder(gameId) {
    const cart = await ordersAPI.addGameToCart(gameId);
    setCart(cart);
  }

  async function handleChangeQty(gameId, newQty) {
    const updatedCart = await ordersAPI.setGameQtyInCart(gameId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    // programatically change client-side routes
    navigate('/orders');
  }

  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuGames={menuGames.filter(game => game.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}