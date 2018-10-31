import React from 'react';

const Pokemon = (props) => {
  if(!props.pokemon) return null;

  return (
    <div>
      <h1>{props.pokemon.forms[0].name}</h1>
      <img src={props.pokemon.sprites.front_default} alt={props.pokemon.forms[0].name} height="200" width="200"/>
      <img src={props.pokemon.sprites.back_default} alt={props.pokemon.forms[0].name} height="200" width="200"/>
      {/* {props.pokemon.sprites.back_default} */}
    </div>
  )
}

export default Pokemon;