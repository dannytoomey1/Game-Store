import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';

export default function NewOrderPage() {
  // If your state will ultimately be an array, ALWAYS
  // initialize to an empty array
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
    }
    getItems();
  }, []);
  // An empty dependency array results in the effect
  // function running ONLY after the FIRST render
  
  return (
    <>
    <h1>NewOrderPage</h1>
    <button onClick={() => setMenuItems(Date.now())}>Trigger re-render</button>
    </>
  );
}