import React, { Component } from 'react';

import { Button, Col, Container, Form, Input, Row } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        'pen',
        'marker',
        'eraser',
        'notebook',
        'pencil',
        'scissors',
        'highlighter',
        'stapler',
        'paper clip',
        'binder',
        'hole punch',
        'laminator',
        'laminating sheets',
        'protective sheets',
        'index cards',
      ],
      searchItem: '',
    };
  }
  searchFunction = () => {
    console.log('Button Clicked');
    const searchItem = this.state.things.find(
      (element) => element === this.state.searchItem
    );
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.searchFunction}>
            <Row xs="2">
              <Col xs="9">
                <Input
                  placeholder="Search Here"
                  // value={this.state.searchItem}
                  // onChange={this.searchFunction}
                />
              </Col>
              <Col xs="3">
                <Input type="submit" value="Submit" />
              </Col>
            </Row>
          </Form>
        </Container>
        <h3>Results:</h3>
      </div>
    );
  }
}

export default SearchIndex;
