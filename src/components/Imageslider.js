import React, { Component } from 'react';
import { Carousel, Button } from "react-bootstrap";
import './ImageSlider.css';

export default class Imageslider extends Component {
    render() {
        return (
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/back1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>First slide label</h2>
      <Button variant="warning">LOGIN</Button> &nbsp;
      <Button variant="primary">Get Started</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="assets/back2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2>First slide label</h2>
      <Button variant="warning">LOGIN</Button> &nbsp;
      <Button variant="primary">Get Started</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/back3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2>First slide label</h2>
      <Button variant="warning">LOGIN</Button> &nbsp;
      <Button variant="primary">Get Started</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
// make a button in wallpapers
        )
    }
}
