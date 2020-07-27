import React, { Component } from "react";
import { Button, Navbar, Nav, Carousel, Badge } from "react-bootstrap";
import SliderLayout from "./SliderLayout";

import "./css/style.css";
import FooterLayout from "./FooterLayout";
import ContactLayout from "./ContactLayout";
import HeaderLayout from "./HeaderLayout";

class DefaultLayout extends Component {
  render() {
    function responsiveSlides() {}
    return (
      <div>
        {/* // Header */}
        <div className="header">
        <HeaderLayout></HeaderLayout>
          {/* Navbar */}
          
          {/* <!-- //Navbar --> */}

          {/* <!-- Slider --> */}
          <SliderLayout />
          {/* <!-- //Slider --> */}
        </div>

        {/* // <!-- trend --> */}
        <h1>
          Trending Games <Badge variant="danger">New</Badge>
        </h1>
      
    
       

        <FooterLayout/>
      </div>
    );
  }
}

export default DefaultLayout;
