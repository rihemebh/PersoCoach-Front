import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Progress from 'react-circle-progress-bar';
import DayCard from './DayCard';

class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      height: '500px',
      width: '800px',
      paddingTop: '20px',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 1)',
      color: 'black',
      fontSize: '20px',
      textTransform: 'uppercase',
      borderRadius: '20px',
    };
  }
  static get CONTAINER_STYLE() {
    return {
     
    };
  }

  render() {
    return (
        <div style={MyCarousel.CONTAINER_STYLE}>
            dsv
      <ReactCardCarousel autoplay={ false } autoplay_speed={ 2500 }>
        <div style={ MyCarousel.CARD_STYLE }>
         
        

       <DayCard/>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <DayCard/>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <DayCard/>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <DayCard/>
        </div>
        <div style={ MyCarousel.CARD_STYLE }>
        <DayCard/>
        </div>
      </ReactCardCarousel>
      </div>
    );
  }
}

export default MyCarousel;