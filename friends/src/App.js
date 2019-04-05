import React, { Component } from 'react';
// import './App.css';
import Friends from "./Components/Friends";
import FriendForm from "./Components/FriendForm"


class App extends Component {
  constructor () {
    super();
    this.state = {
        items:[]
    };
  }

  render() {
    return (
      <div className="App">
        <Friends/>
        <FriendForm/>
      </div>
    );
  }
}

export default App;
