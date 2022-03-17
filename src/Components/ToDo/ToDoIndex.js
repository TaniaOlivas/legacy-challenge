import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

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
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={this.state.toDo}
            onChange={(e) => this.setState.toDo(e.target.value)}
          />{' '}
          <Button type="submit">Submit</Button>
        </Form>
        <ul>
          <li>{this.state.toDo}</li>
        </ul>
      </div>
    );
  }
}

export default ToDoIndex;
