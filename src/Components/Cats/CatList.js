import React, { Component } from 'react';

class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.cats.map((cat) => (
          <li>{cat}</li>
        ))}
      </div>
    );
  }
}

export default CatList;
