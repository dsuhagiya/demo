import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }
  handlechangetext = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlechangecomment = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handlechangetopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handlesubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };

  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <div>
          <label>Username:</label>{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handlechangetext}
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            value={this.state.comments}
            onChange={this.handlechangecomment}
          ></textarea>
        </div>
        <div>
          <label>Topic: </label>
          <select value={this.state.topic} onChange={this.handlechangetopic}>
            <option value="Vue">Vue</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
