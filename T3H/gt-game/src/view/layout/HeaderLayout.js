import React, { Component } from "react";

import { Button, Navbar, Nav, Carousel, Badge } from "react-bootstrap";
import SliderLayout from "./SliderLayout";

class HeaderLayout extends Component {
  render() {
    return (
      <div className="header">
      <Navbar expand="lg" className="navbar navbar-default ">
        <div className="container ">
          <div className="navbar-header" style={{ opacity: 1 }}>
            <a href="/">
              <h1>
                Games <img src="images/c1.png" alt=" " /> Zone
              </h1>
            </a>
          </div>

          <Nav id="navbar" className="nav navbar-right ">
            <Nav.Link className="hover-effect" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="hover-effect" href="about">
              About
            </Nav.Link>
            <Nav.Link className="hover-effect" href="games">
              Games
            </Nav.Link>
            <Nav.Link className="hover-effect" href="news">
              News
            </Nav.Link>
            <Nav.Link className="hover-effect" href="contact">
              Contact
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <SliderLayout />
      </div>
    );
  }
}

export default HeaderLayout;
