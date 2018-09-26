import React, { Component } from 'react';
import './App.css';
import Level from "../components/Level.jsx"
import { GAME_LEVELS } from "../GAME_LEVELS.js"
import Background from "./Background.jsx";
import ActorList from "./ActorList.jsx"

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: "playing",
      level: new Level(GAME_LEVELS[0]),
    }
  }

  render() {
    return (
      <div className="App">
        <Background level = {this.state.level}/>
        <ActorList level = {this.state.level}/>
      </div>
    );
  }
}

export default App;
