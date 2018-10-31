import React from 'react';
import PokemonSelect from '../components/PokemonSelect';

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
    .then(data => this.setState({pokemons: data.results}))
  }
  
  
  render () {
    return(
      <div>
        <h1>Container</h1>
        <PokemonSelect pokemons={this.state.pokemons}/>
      </div>
    )
  }
}

export default PokemonContainer;