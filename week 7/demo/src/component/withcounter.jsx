import React, { Component } from "react";

const UpdatedComponent = (Originalcomponent) => {
  class Newcomponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementHandle = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <Originalcomponent
          count={this.state.count}
          incrementCount={this.incrementHandle}
        />
      );
    }
  }
  return Newcomponent;
};
export default UpdatedComponent;
