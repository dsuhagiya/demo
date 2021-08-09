import React, { Component } from "react";
import Addauthor from "./Addauthor";
import Author from "./Author";
import Navbar from "./Navbar";

export default class Container extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Author />
        <Addauthor />
      </div>
    );
  }
}
