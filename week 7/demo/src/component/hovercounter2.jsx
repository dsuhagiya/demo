import React, { Component } from "react";

class Hovercounter2 extends Component {
  render() {
    const { count, incrementHandle } = this.props;
    return (
      <div onMouseOver={incrementHandle}>
        <h1>Hovered {count} times</h1>
      </div>
    );
  }
}

export default Hovercounter2;
