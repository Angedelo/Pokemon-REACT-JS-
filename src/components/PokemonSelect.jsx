import React from 'react';

const PokemonSelect = (props) => {
    const options = props.pokemons.map((pokemon, index) => {
      return <option key={index} value={pokemon.url}>
              {pokemon.name}
            </option>
    })

    

  return (
    <select id="pokemon-selector" defaultValue="default">
      <option disabled value="default">Choose a Pokemon..</option>
        {options}
    </select>
  )
}

export default PokemonSelect;