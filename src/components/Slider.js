import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from './images/banner.jpg';

function Slider() {
  return (
    <div className="App">
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHQfrL8ONAmRuhirC3EhsaQjoaDUAqgHuaqdKwnU701m7slWiK"
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
}

export default Slider;
