import React, { Component } from 'react';

class DogIndex extends Component {
  url = 'https://dog.ceo/api/breeds/image/random';
  constructor() {
    super();
    this.state = { dogData: [] };
  }

  fetchDogs = async () => {
    const res = await fetch(this.url);
    const data = await res.json();
    console.log(data);
    this.setState({ dogData: data });
  };

  componentDidMount() {
    this.fetchDogs();
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchDogs}>Click Here for Dog Image</button>
        <br />
        <img src={this.state.dogData.message} alt="Dog" />
      </div>
    );
  }
}

export default DogIndex;
