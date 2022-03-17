import React, { Component } from 'react';
class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', task: [{ task: '', complete: false }] };
  }
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleClick = () => {
    const newTask = this.state.task;
    newTask.push({
      task: this.state.inputValue,
      complete: false,
    });
    this.setState({
      task: newTask,
    });
  };
  handleUpdate = (e, arrayBucketNumber) => {
    let updateTask = this.state.task;
    updateTask[arrayBucketNumber] = {
      task: updateTask[arrayBucketNumber].task,
      complete: e.target.checked,
    };
    this.setState({
      task: updateTask,
    });
  };
  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add to List</button>
        <ul>
          {this.state.task.map((item, arrayBucketNumber) => (
            <li
              key={arrayBucketNumber}
              style={{
                textDecoration: item.complete ? 'line-through' : 'none',
              }}
            >
              <input
                type="checkbox"
                onChange={(e) => this.handleUpdate(e, arrayBucketNumber)}
              />
              {item.task}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ToDoList;
