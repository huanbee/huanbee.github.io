import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  Carousel,
  Badge,
  Container,
  Row,
  Col,
} from "react-bootstrap";
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
        <HeaderLayout></HeaderLayout>
        {/* // <!-- trend --> */}
        <h1>
          Trending Games <Badge variant="danger">New</Badge>
        </h1>

        <Container style={{marginBottom:"50px"}}>
          <h1>
            <Badge variant="danger">New Game</Badge>
          </h1>
          <Row>
            <Col sm={3} xs={6} className=" view view-eighth">
              <img src="images/ng1.jpg" alt=" " />
              <div class="mask">
                <a href="single">
                  <h4>Click here</h4>
                </a>
                <p>To learn more about this</p>
              </div>
            </Col>
            <Col sm={3} xs={6} className=" view view-eighth">
              <img src="images/ng2.jpg" alt=" " />
              <div class="mask">
                <a href="single">
                  <h4>Click here</h4>
                </a>
                <p>To learn more about this</p>
              </div>
            </Col>
            <Col sm={3} xs={6} className=" view view-eighth">
              <img src="images/ng3.jpg" alt=" " />
              <div class="mask">
                <a href="single">
                  <h4>Click here</h4>
                </a>
                <p>To learn more about this</p>
              </div>
            </Col>
            <Col sm={3} xs={6} className=" view view-eighth">
              <img src="images/ng4.jpg" alt=" " />
              <div class="mask">
                <a href="single">
                  <h4>Click here</h4>
                </a>
                <p>To learn more about this</p>
              </div>
            </Col>
            <Col sm={3} xs={6} className=" view view-eighth">
              <img src="images/ng5.jpg" alt=" " />
              <div class="mask">
                <a href="single">
                  <h4>Click here</h4>
                </a>
                <p>To learn more about this</p>
              </div>
            </Col>
            <Col sm={3} xs={6} className=" view view-eighth">
              <img src="images/ng6.jpg" alt=" " />
              <div class="mask">
                <a href="single">
                  <h4>Click here</h4>
                </a>
                <p>To learn more about this</p>
              </div>
            </Col>
            <Col sm={3} xs={6} className=" view view-eighth">
              <img src="images/ng7.jpg" alt=" " />
              <div class="mask">
                <a href="single">
                  <h4>Click here</h4>
                </a>
                <p>To learn more about this</p>
              </div>
            </Col>
            <Col sm={3} xs={6} className=" view view-eighth">
              <img src="images/ng8.jpg" alt=" " />
              <div class="mask">
                <a href="single">
                  <h4>Click here</h4>
                </a>
                <p>To learn more about this</p>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <!-- flexSlider --> */}

     
          <Carousel interval={2000} className="sldedit" slide={false} controls={false}>
         
            <Carousel.Item>
            <img src="images/sbbg.jpg" alt=" " />
              <Carousel.Caption>
                <div className="center">
                  <h3 style={{color:"red"}}>Duis aute dolor reprehenderit</h3>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt
                    officia.
                  </p>
                  <a href="single" class="learn">
                    Learn More
                  </a>
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item> <img src="images/sbbg.jpg" alt=" " />
              <Carousel.Caption>
              <div className="center">
                  <h3>Aliquip commodo consequat</h3>
                  <p>
                    Curabitur lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                  <a href="single.html" class="learn">
                    Learn More
                  </a>
                  </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item> <img src="images/sbbg.jpg" alt=" " />
              <Carousel.Caption>
              <div className="center">
                  <h3>Quis autem vel eum iure ea</h3>
                  <p>
                    Phasellus ornare consectetur erat, eu vehicula orci finibus
                    at.
                  </p>
                  <a href="single.html" class="learn">
                    Learn More
                  </a>
               </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


        <FooterLayout />
      </div>
    );
  }
}

export default DefaultLayout;
