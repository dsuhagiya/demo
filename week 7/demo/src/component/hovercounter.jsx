import React, { Component } from "react";
import UpdatedComponent from "./withcounter";
import Prtl from "./portalex";
import { Profiler } from "react";
class Hovercounter extends Component {
  cbf = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interaction
  ) => {
    console.log("Id: " + id + "  phase: " + phase);
    console.log("Actual Duration: ", actualDuration);
    console.log("baseDuration: ", baseDuration);
    console.log("startTime: ", startTime);
    console.log("commitTime: ", commitTime);
    console.log("interaction: ", interaction);
  };
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div onMouseMove={incrementCount}>
        <Profiler id="portal" onRender={this.cbf}>
          <Prtl />
        </Profiler>
        <h1>Mouse hovered {count} times</h1>
      </div>
    );
  }
}

export default UpdatedComponent(Hovercounter);
