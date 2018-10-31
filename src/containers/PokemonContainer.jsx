import React from 'react';

class PokemonContainer extends React.Component {
    
  constructor (props) {
    super(props);
    this.state = {
      pokemons: [],
      currentPokemon: null
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => response.json())
    .then(data => this.setState({pokemons: data}))
  }
  
  
  render () {
    return(
      <div>
        <h1> This is the container</h1>
      </div>
    )
  }
}

export default PokemonContainer;