import React, { Component } from "react";
import FRchild from "./FRchild";

export default class FRparent extends Component {
  constructor(props) {
    super(props);
    this.inputref = React.createRef();
  }

  onClickhandler = () => {
    this.inputref.current.focus();
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <FRchild ref={this.inputref} />
          <button onClick={this.onClickhandler}>Focus input</button>
        </div>
      </React.Fragment>
    );
  }
}
