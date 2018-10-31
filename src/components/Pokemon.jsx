import React from 'react';
import capitalize from '../helpers/capitalize';

const Pokemon = (props) => {
  if(!props.pokemon) return null;

  return (
    <div>
      <h1 className="pokemon-name">{capitalize(props.pokemon.forms[0].name)}</h1>
      <img src={props.pokemon.sprites.front_default} alt={props.pokemon.forms[0].name} height="200" width="200"/>
      <img src={props.pokemon.sprites.back_default} alt={props.pokemon.forms[0].name} height="200" width="200"/>
      <ul>
        <li>Type: {props.pokemon.types[0].type.name}</li>
      </ul>
    </div>
  )
}

export default Pokemon;
