import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Authors</li>
              <li>Add Author</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
