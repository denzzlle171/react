import React, { Component } from 'react';


class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

    handleTaskCreate = () => {
        this.props.onCreate(this.state.value)
        this.setState({ value: ''})
  }
  

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="btn create-task__btn"
          onClick={this.handleTaskCreate}
        >
          Create
        </button>
      </div>
    );
  }
}
export default CreateTaskInput;


// 1.take text from imput
// 2.create task with text 
// 3.add created task tj the list 