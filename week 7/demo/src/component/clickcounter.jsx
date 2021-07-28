import React, { Component } from "react";
import UpdatedComponent from "./withcounter";

class Clickcounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Mouse click {count} times</button>;
  }
}

export default UpdatedComponent(Clickcounter);
