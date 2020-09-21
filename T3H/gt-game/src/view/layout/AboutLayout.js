import React, { Component } from "react";
import FooterLayout from "./FooterLayout";
import {
  Navbar,
  Nav,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  Badge,
} from "react-bootstrap";
import Sub_HeaderLayout from "./Sub_HeaderLayout";

class AboutLayout extends Component {
  render() {
    return (
      <div>
        <Sub_HeaderLayout />

        <Container>
          <h1>
            <Badge variant="danger">About Us</Badge>
          </h1>
          
        </Container>

        <div className="collection-agileits">
          <Row>
            <Col sm={4} xs={12} className="collection-left"></Col>
            <Col sm={8} xs={12} className="collection-right">
              <Row>
                <Col
                  sm={4}
                  xs={6}
                  className="collection-grid collection-text collection-grid-1"
                >
                  <img src="images/c1.png" alt="" />
                  <h3>Convallis </h3>
                  <p>
                    A elementum ligula lacus ac quam ultrices a scelerisque
                    praesent vel suspendisse scelerisque.
                  </p>
                </Col>
                <Col
                  sm={4}
                  xs={6}
                  className="collection-grid collection-image collection-grid-2"
                ></Col>
                <Col
                  sm={4}
                  xs={6}
                  className="collection-grid collection-text collection-grid-3"
                >
                  <img src="images/c2.png" alt="" />
                  <h3>Lacinia</h3>
                  <p>
                    A elementum ligula lacus ac quam ultrices a scelerisque
                    praesent vel suspendisse scelerisque.
                  </p>
                </Col>
                <Col
                  sm={4}
                  xs={6}
                  className="collection-grid collection-image collection-grid-4"
                ></Col>
                <Col
                  sm={4}
                  xs={6}
                  className="collection-grid collection-text collection-grid-5"
                >
                  <img src="images/c3.png" alt="" />
                  <h3>Sapien</h3>
                  <p>
                    A elementum ligula lacus ac quam ultrices a scelerisque
                    praesent vel suspendisse scelerisque.
                  </p>
                </Col>
                <Col
                  sm={4}
                  xs={6}
                  className="collection-grid collection-image collection-grid-6"
                ></Col>
              </Row>
              <div class="clearfix"></div>
            </Col>
            <div class="clearfix"></div>
          </Row>
        </div>

        <FooterLayout />
      </div>
    );
  }
}

export default AboutLayout;
