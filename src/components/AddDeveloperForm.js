import React, { Component } from "react";

class AddDeveloperForm extends Component {

  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDeveloper(this.state.value);
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a developer's name" 
        />
        <input type="submit" value="Add Developer" />
      </form>
    )
  }
};

export default AddDeveloperForm;

