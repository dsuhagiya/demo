import React, { Component } from "react";
import "./author.scss";

export default class Author extends Component {
  render() {
    return (
      <div id="author">
        <h1>Author</h1>
        <button id="add">Add Author</button>
        <br />
        <table id="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Book_ID</th>
              <th>First_name</th>
              <th>Last_name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>Annie</td>
              <td>22</td>
              <td>
                <button id="update">Update</button>
                <button id="delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>Annie</td>
              <td>22</td>
              <td>
                <button id="update">Update</button>
                <button id="delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>Annie</td>
              <td>22</td>
              <td>
                <button id="update">Update</button>
                <button id="delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
