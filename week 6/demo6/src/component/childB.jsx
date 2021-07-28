import React, { Component } from "react";
import { Fname } from "./p1";

export default class ChildB extends Component {
  render() {
    return (
      <div>
        <Fname.Consumer>
          {(name) => {
            return <h1>{name}</h1>;
          }}
        </Fname.Consumer>
      </div>
    );
  }
}
