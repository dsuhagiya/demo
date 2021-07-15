import React, { Component } from "react";
import axios from "axios";

export class Datapost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: null,
      //   postId: null,
      //   items: [],
      //   isLoaded: false,
    };
  }

  componentDidMount() {
    // Simple POST request with a JSON body using axios
    const article = {
      userId: 1222,
      id: 13452,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", article)
      .then((response) => console.log(response.data));
  }

  //   async componentDidMount() {
  //     // POST request using fetch with async/await
  //     const requestOptions = {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         userId: 1222,
  //         id: 13452,
  //         title: "qui est esse",
  //         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  //       }),
  //     };
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       requestOptions
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     this.setState({ postId: data.id });
  //   }

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
