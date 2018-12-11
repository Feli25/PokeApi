import React, { Component } from 'react'
import axios from 'axios';

export default class Details extends Component {
  constructor(props){
    super(props);
    this.state={
      pokemon: {}
    }
  }
  componentDidMount(){
    var pokeId = this.props.match.params.id;
    console.log(pokeId)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
      .then(res => {
        this.setState({
          pokemon: res.data
        })
      })
  }
  render() {
    console.log("sth", this.state.pokemon)
    return (
      <div class="card details">
      <div class="card-body">
        <h5 class="card-title">{this.state.pokemon.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted"><strong>Height:</strong>{this.state.pokemon.height}</h6>
        <p class="card-text"></p>
      </div>
    </div>
    )
  }
}
