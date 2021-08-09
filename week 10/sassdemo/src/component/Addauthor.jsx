import React, { Component } from "react";
import "./addauthor.scss";

export default class Addauthor extends Component {
  render() {
    return (
      <div id="main">
        <h1>Manage Author</h1>
        <form>
          <div>
            <label for="id">ID</label>
            <br />
            <input type="number" placeholder="Enter ID" />
          </div>
          <div>
            <label for="id">Book_Id</label>
            <br />
            <input type="number" placeholder="Enter Book_Id" />
          </div>
          <div>
            <label for="id">First Name</label>
            <br />
            <input type="text" placeholder="Enter first name" />
          </div>
          <div>
            <label for="id">Last Name</label>
            <br />
            <input type="text" placeholder="Enter lastname" />
          </div>
          <button>Save</button>
        </form>
      </div>
    );
  }
}
