import React, { Component } from 'react';

class ToDoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { toDo: [] };
  }
  handleSubmit = (e) => {
    console.log('Submit was clicked');
    this.setState({ toDo: [...this.state.toDo] });
  };
  //   handleChange = (e) => {
  //     this.setState({ toDo: e.target.value });
  //   };
  componentDidMount() {
    this.handleSubmit();
  }

  render() {
    return (
      <div>
        <h1>To Do List:</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.toDo}
            onChange={(e) => this.setState.toDo(e.target.value)}
          />{' '}
          <input type="submit" value="Submit" />
        </form>
        <ul>
          <li>{this.state.toDo}</li>
        </ul>
      </div>
    );
  }
}

export default ToDoIndex;
