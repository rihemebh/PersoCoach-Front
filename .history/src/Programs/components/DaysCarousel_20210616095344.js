import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '400px',
      width: '400px',
      paddingTop: '80px',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, .9)',
      color: 'black',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

  render() {
    return (
      <ReactCardCarousel autoplay={ false } autoplay_speed={ 2500 }>
        <div style={ MyCarousel.CARD_STYLE }>
          Day 1
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Day 2
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Day 3
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Day 4
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
         Day 5
        </div>
      </ReactCardCarousel>
    );
  }
}

export default MyCarousel;