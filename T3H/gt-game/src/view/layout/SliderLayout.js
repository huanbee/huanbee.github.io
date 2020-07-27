import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class SliderLayout extends Component {
    render() {
        return (
            <Carousel >
            <Carousel.Item><img src="images/banner3.jpg" alt="" className='w-100' /> </Carousel.Item>
            <Carousel.Item><img src="images/banner2.jpg" alt="" className='w-100'/> </Carousel.Item>
            <Carousel.Item><img src="images/banner1.jpg" alt="" className='w-100'/> </Carousel.Item>
                
            </Carousel>
        );
    }
}

export default SliderLayout;