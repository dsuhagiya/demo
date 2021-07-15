//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
// import Helloworld from "./component/helloworld";
// import Greetings from "./component/greet";
// import Usestate from "./component/usestate";
// import Form from "./component/forms";
import Calculator from "./component/calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
        {/* <Form /> */}
        {/* <Helloworld /> */}
        {/* <Greetings /> */}
        {/* <Usestate /> */}
      </div>
    );
  }
}
export default App;
