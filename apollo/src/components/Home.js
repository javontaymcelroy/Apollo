// ------------------------------------- DEPENDACIES ----------------------------------------------------- //
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
// ------------------------------------- STYLES ----------------------------------------------------- //
import './Home.css';
// ------------------------------------- IMAGES ----------------------------------------------------- //
import dots from '../assets/Border_dots.png';
import subherobg from '../assets/subhero-bg.png';
// ------------------------------------- COMPONENT ----------------------------------------------------- //
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mashable: [],
      wired: [],
      abcnews: [],
      espn: [],
      techradar: [],
      ign: []
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

    // ------------------------------------- IGN ----------------------------------------------------- //
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?sources=ign&apiKey=8d966ab2b0614bbebfb3425f0369bf0c'
      )
      .then(res => this.setState({ ign: res.data.articles[1] }))
      .catch(err => console.log(err));
  }

  render() {
    const mashable = this.state.mashable;
    const wired = this.state.wired;
    return (
      <>
        <div className='hero'>
          <p className='hero-source'>
            <mark>SOURCE: </mark> MASHABLE{' '}
          </p>
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
        </div>
        <div className='sub-hero'>
          <div className='sub-hero-section'>
            <img
              src={wired.urlToImage}
              alt={wired.title}
              className='sub-hero-image'
            />
            <div className='sub-hero-content'>
              <div className='sub-hero-header'>
                <div>
                  <h4 className='sub-hero-author sub-author'>Author</h4>
                  <h4 className='sub-hero-author'>{wired.author}</h4>
                </div>
                <div>
                  <h4 className='sub-hero-publish sub-publish'>published</h4>
                  <h4 className='sub-hero-publish'>
                    {moment(wired.publishedAt, 'YYYY-MM-DD').format('MM DD Y')}
                  </h4>
                </div>
              </div>
              <h1 className='sub-hero-title'>{wired.title}</h1>
              <p className='sub-hero-desc'>"{wired.description}"</p>
              <button className='sub-hero-btn'>Read more</button>
            </div>
          </div>
        </div>
        <div className='background-elements'>
          <img src={subherobg} alt='border' className='subherobg' />
          <span className='sub-div' />
          <span className='center-line' />
          <span className='left-line' />
          <span className='right-line' />
        </div>
      </>
    );
  }
}

export default Home;
