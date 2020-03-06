import React, { Component } from "react";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: [
        "Open d'Australie",
        "Roland Garros",
        "Wimbledon",
        "US Open",
        "ATP ",
        "Miami Open"
      ]
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">Tournaments</h1>
        <ul>
          {this.state.match.map(value => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Skills;
