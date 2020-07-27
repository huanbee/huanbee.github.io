import React, { Component } from 'react';
import { Carousel } from 'antd';
import './banner.css';

class BannerLayout extends Component {
    render() {
        return (
            <Carousel autoplay >
            <div style={{position:'absolute'}}>
             <img src="/images/2.jpg" alt="" srcset=""/>
             <h2>Hinh 1</h2>
            </div>
        
            <div style={{position:'absolute'}}>
            <img src="/images/3.jpg" alt=""  />
            <h2>Hinh 1</h2>
            </div>
            <div style={{position:'absolute'}}>
            <img src="/images/4.jpg" alt="" srcset=""/>
            <h2>Hinh 1</h2>
            </div>
          </Carousel>
        );
    }
}

export default BannerLayout;