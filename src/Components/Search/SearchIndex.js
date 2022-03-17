import React, { Component } from 'react';

import { Input } from 'reactstrap';

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
    };
    function searchFunction() {
      const searchItem = this.state.things.find((element) => element === 'pen');
      console.log(searchItem);
    }
  }

  render() {
    return (
      <div>
        <Input placeholder="Search Here" />

        <h3>Results:</h3>
      </div>
    );
  }
}

export default SearchIndex;
