import React from "react";
import axios from "axios";
import Friend from "./Friend";

export default class Friends extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
   this.getFriendsYouNerd();
  }

  getFriendsYouNerd = () => {
    axios
    .get("http://localhost:5000/friends")
    .then(res => {
      this.setState({
        friends: res.data
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.friends.map(f => (
          <Friend key={f.id} friend={f} />
        ))}
      </div>
    );
  }
}
