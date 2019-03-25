// ------------------------------------- DEPENDACIES ----------------------------------------------------- //
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
// ------------------------------------- STYLES ----------------------------------------------------- //
import './Home.css';
// ------------------------------------- IMAGES ----------------------------------------------------- //
import dots from '../assets/Border_dots.png';
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
      .then(res => this.setState({ mashable: res.data.articles[0] }))
      .catch(err => console.log(err));

    // ------------------------------------- WIRED ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=wired&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ wired: res.data.articles[0] }))
      .catch(err => console.log(err));

    // ------------------------------------- ABC NEWS ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ abcnews: res.data.articles[0] }))
      .catch(err => console.log(err));

    // ------------------------------------- ESPN ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ espn: res.data.articles[0] }))
      .catch(err => console.log(err));

    // ------------------------------------- TECH RADAR ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ techradar: res.data.articles[0] }))
      .catch(err => console.log(err));
  }

  render() {
    const mashable = this.state.mashable;
    return (
      <>
        <p className='hero-published'>
          {moment(mashable.publishedAt, 'YYYY-MM-DD').format('MM DD Y')}
        </p>
        <p className='hero-desc'>"{mashable.content}"</p>
        <button className='hero-btn'>Read More</button>
        <div className='hero-section'>
          <img src={dots} alt='dots' className='dots' />
          <div className='hero-info'>
            <h4 className='hero-author'>{mashable.author}</h4>
            <h1 className='hero-title'>{mashable.title}</h1>
          </div>
          <img
            src={mashable.urlToImage}
            alt={mashable.title}
            className='hero-image'
          />
        </div>
        <span className='hero-background' />
        <div className='background-elements'>
          <span className='center-line' />
          <span className='left-line' />
          <span className='right-line' />
        </div>
      </>
    );
  }
}

export default Home;
