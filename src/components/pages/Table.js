import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemons : []
    }
  }
  componentDidMount=()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => {
        this.setState({
          pokemons:res.data.results
        })
      })
  }
  handleClick = (pokemonURL)=>{
    console.log(pokemonURL)
  }
  render() {
    // console.log("poke", this.state.pokemons)
    return (
      <div className="card table">
        <div className="card-header">All Pokemons</div>
        <ul class="list-group list-group-flush" >
        {this.state.pokemons.map((pokeObject,id)=>{
            return(
              
              <Link to={`/poke/${id}`}><li class="list-group-item">{pokeObject.name}</li></Link>
            )
          })}
        </ul>
      </div>
    )
  }
}
