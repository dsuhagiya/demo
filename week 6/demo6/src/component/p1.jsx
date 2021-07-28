import React, { Component } from "react";
import { createContext } from "react";
import ChildA from "./childA";

export const Fname = createContext();
export default class P1 extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <Fname.Provider value="john">
          <ChildA />
        </Fname.Provider>
      </div>
    );
  }
}
