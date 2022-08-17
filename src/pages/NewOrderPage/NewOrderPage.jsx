import React, { useState, useEffect, useRef } from 'react';
import * as gamesAPI from '../../utilities/games-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import GenreList from '../../components/GenreList/GenreList';
import PlatformList from '../../components/PlatformList/PlatformList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function NewOrderPage({ user, setUser }) {
  const [menuGames, setMenuGames] = useState([]);
  const [activeGen, setActiveGen] = useState('');
  const [activePlat, setActivePlat] = useState('');
  const [cart, setCart] = useState(null);
  const genresRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getGames() {
      const games = await gamesAPI.getAll();
      let temp = games.map(game => game.genre.name)
      temp.push("All")
      genresRef.current = [...new Set(temp)];
      setMenuGames(games);
      setActiveGen(genresRef.current[genresRef.current.length - 1]);
      setActivePlat({name: "All"});
    }
    getGames();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

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
    navigate('/orders');
  }

  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <GenreList
          genres={genresRef.current}
          activeGen={activeGen}
          setActiveGen={setActiveGen}
        />
        <PlatformList
          activePlat={activePlat}
          setActivePlat={setActivePlat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuGames={menuGames.filter(game => (game.genre.name === activeGen || activeGen === "All")).filter(game => game.platforms.includes(activePlat.name))}
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