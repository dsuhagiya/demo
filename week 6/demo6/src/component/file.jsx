import React, { Component } from "react";

export class File extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  onChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      console.warn("img data", e.target.result);
    };
  };

  render() {
    return (
      <div onSubmit={this.onFormSubmit}>
        <input type="file" name="file" onChange={(e) => this.onChange(e)} />
      </div>
    );
  }
}
