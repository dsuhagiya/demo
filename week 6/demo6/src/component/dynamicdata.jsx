import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/users`,
});
export class Dynamicdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({
        isLoaded: true,
        items: res.data,
      });
    });
  }

  //   componentDidMount = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         this.setState(
  //           {
  //             isLoaded: true,
  //             items: json,
  //           },
  //           console.log(json)
  //         );
  //       });
  //   };

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          {items.map((item) => (
            <ul>
              <li key={item.id}>{item.name}</li>
            </ul>
          ))}
          ;
        </div>
      );
    }
  }
}
