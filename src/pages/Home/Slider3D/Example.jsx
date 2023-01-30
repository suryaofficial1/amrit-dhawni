import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4} from 'uuid';
import { config } from "react-spring";
import { Link } from "react-router-dom";
import './Example.css'

import slide1 from "../../../images/mask-group3@2x.png"
import slide2 from "../../../images/mask-group4@2x.png"
import slide3 from "../../../images/mask-group6@2x.png"





export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };
  

  slides = [
    {
      key: uuidv4(),
      content: <img src={slide1} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src={slide2} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src={slide3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={slide3} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src={slide3} alt="3" />
    },
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation='true'
          animationConfig={this.state.config}>
          </Carousel>
      
      
      </div>
    );
  }
}

// export default Example;