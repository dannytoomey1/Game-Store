import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';

export default function NewOrderPage() {
  // If your state will ultimately be an array, ALWAYS
  // initialize to an empty array
  const [menuItems, setMenuItems] = useState(42);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setMenuItems(items);
    }
    getItems();
    return function() {
      console.log('going bye bye');
    }
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