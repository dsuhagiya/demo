import React, { Component } from "react";
import ChildB from "./childB";
import { Fname } from "./p1";

export default class ChildA extends Component {
  render() {
    return (
      <div>
        <ChildB />
      </div>
    );
  }
}
