import React, { Component } from 'react';
import './App.css';
import Level from "../components/Level.jsx"
import { GAME_LEVELS } from "../GAME_LEVELS.js"
import Background from "./Background.jsx";
import Actors from "./Actors.jsx"

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: "playing",
      level: new Level(GAME_LEVELS[0]),
      actors: [],
    }
  }
  render() {

    return (
      <div className="App">
        <Background level = {this.state.level}/>
        <Actors />
      </div>
    );
  }
}

export default App;
