import React from 'react';
import './Pokecard.css';

const BASE_IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard ({id, name, type, base_experience}) {
  let imgSrc = `${BASE_IMG_URL}${id}.png`;

  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{name}</h4>
      <img className="Pokecard-img"  src={imgSrc} alt={name} />
      <p className="Pokecard-info">Type: {type}</p>
      <p className="Pokecard-info">EXP: {base_experience}</p>
    </div>
  )
}

export default Pokecard;