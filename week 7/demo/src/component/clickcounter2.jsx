import React, { Component } from "react";

class Clickcounter2 extends Component {
  render() {
    const { count, incrementHandle } = this.props;
    return <button onClick={incrementHandle}>Clicked {count} times</button>;
  }
}

export default Clickcounter2;
