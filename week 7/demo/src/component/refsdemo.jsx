import React, { Component } from "react";
import { Fragment } from "react";

export default class Refsdemo extends Component {
  constructor(props) {
    super(props);
    this.inputref = React.createRef();
    this.cbref = null;
    this.setCbRef = (element) => {
      this.cbref = element;
    };
  }

  componentDidMount = () => {
    this.inputref.current.focus();
    this.cbref.focus();
  };
  onClickhandler = () => {
    alert(this.inputref.current.value);
  };

  render() {
    return (
      <Fragment>
        <input type="text" ref={this.inputref} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.onClickhandler}>Click me</button>
      </Fragment>
    );
  }
}
