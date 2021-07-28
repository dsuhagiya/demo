import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Prtl extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1>Portal demo</h1>,
      document.getElementById("portal-root")
    );
  }
}
