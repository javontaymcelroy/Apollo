// ------------------------------------- DEPENDACIES ----------------------------------------------------- //
import React, { Component } from 'react';
import axios from 'axios';

// ------------------------------------- COMPONENT ----------------------------------------------------- //
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mashable: [],
      wired: [],
      abcnews: [],
      espn: [],
      techradar: []
    };
  }

  // ------------------------------------- API CALLS ----------------------------------------------------- //
  componentDidMount() {
    // ------------------------------------- MASHABLE ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=mashable&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ mashable: res.data.articles }))
      .catch(err => console.log(err));

    // ------------------------------------- WIRED ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=wired&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ wired: res.data.articles }))
      .catch(err => console.log(err));

    // ------------------------------------- ABC NEWS ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ abcnews: res.data.articles }))
      .catch(err => console.log(err));

    // ------------------------------------- ESPN ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ espn: res.data.articles }))
      .catch(err => console.log(err));

    // ------------------------------------- TECH RADAR ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ techradar: res.data.articles }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>Welcome Home!</p>
      </div>
    );
  }
}

export default Home;
