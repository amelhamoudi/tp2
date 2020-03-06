import React, { Component } from "react";
import Widecard from "../components/Widecard";
class Team extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic"> Team</h1>
        <Widecard title="Ons Jabeur" where="Tunisia" from="2005" to="Present" />
        <Widecard
          title="Malek Jaziri"
          where="Tunisia"
          from="2003"
          to="Present"
        />
      </div>
    );
  }
}
export default Team;
