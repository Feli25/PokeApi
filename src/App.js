import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Table from './components/pages/Table'
import Details from './components/pages/Details'
import Home from './components/pages/Home'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // pokemons: {},
      selected: null
    }
  }
  render() {
    return (
      <div className="App">
        <Table/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/poke/:id" component={Details}/>
          <Route render={() => <h1>404</h1>} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
