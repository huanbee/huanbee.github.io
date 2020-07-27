import React, { Component } from "react";
import { Button, Navbar, Nav, Carousel, Badge } from "react-bootstrap";

class HeaderLayout extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar navbar-default ">
        <div className="container ">
          <div className="navbar-header" style={{ opacity: 1 }}>
            <a href="index.html">
              <h1>
                Games <img src="images/c1.png" alt=" " /> Zone
              </h1>
            </a>
          </div>

          <Nav id="navbar" className="nav navbar-right ">
            <Nav.Link className="hover-effect" href="#1">
              Home
            </Nav.Link>
            <Nav.Link className="hover-effect" href="#2">
              About
            </Nav.Link>
            <Nav.Link className="hover-effect" href="#3">
              Game
            </Nav.Link>
            <Nav.Link className="hover-effect" href="#4">
              News
            </Nav.Link>
            <Nav.Link className="hover-effect" href="#5">
              Contact
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    );
  }
}

export default HeaderLayout;
