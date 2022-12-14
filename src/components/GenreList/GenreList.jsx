import React, { } from 'react';
import './GenreList.css';

export default function GenreList({ genres, activeGen, setActiveGen }) {
  const gens = genres.map(gen =>
    <li
      key={gen}
      className={gen === activeGen ? 'active' : ''}
      onClick={() => setActiveGen(gen)}
    >
      {gen}
    </li>
  );
  return (
    <ul className="GenreList">
      {gens}
    </ul>
  );
}
