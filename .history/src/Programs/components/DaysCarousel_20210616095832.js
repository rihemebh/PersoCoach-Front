import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Progress from 'react-circle-progress-bar';

class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '450px',
      width: '500px',
      paddingTop: '80px',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 1)',
      color: 'black',
      fontSize: '20px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  render() {
    return (
        <div style={MyCarousel.CONTAINER_STYLE}>
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