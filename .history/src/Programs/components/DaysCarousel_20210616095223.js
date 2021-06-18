import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';

class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '400px',
      width: '400px',
      paddingTop: '80px',
      textAlign: 'center',
      background: 'white',
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
          Day1
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Second Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Third Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Fourth Card
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
          Fifth Card
        </div>
      </ReactCardCarousel>
    );
  }
}

export default MyCarousel;