import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

class FooterLayout extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col sm xs={12}>
              <div id="contact">
                <h4>Contact</h4> <hr />
                <a href="mailto:huanbee97@gmail.com">
                  <FontAwesomeIcon icon={faAt} /> huanbee97@gmail.com
                </a>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +84 369140123
                </p>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Ha Noi, Viet Nam
                </p>
              </div>
            </Col>
            <Col sm xs={12}>
              <h4>Latest Games</h4>
              <hr />
              <Row id="lsGame">
                <Col
                  sm={3}
                  xs={3}
                  style={({ paddingLeft: 0 }, { paddingRight: 0 })}
                >
                  <a href="single">
                    <img src="images/ng1.jpg" alt=" " />
                  </a>
                </Col>
                <Col
                  sm={3}
                  xs={3}
                  style={({ paddingLeft: 0 }, { paddingRight: 0 })}
                >
                  <a href="single">
                    <img src="images/ng2.jpg" alt=" " />
                  </a>
                </Col>
                <Col
                  sm={3}
                  xs={3}
                  style={({ paddingLeft: 0 }, { paddingRight: 0 })}
                >
                  <a href="single">
                    <img src="images/ng3.jpg" alt=" " />
                  </a>
                </Col>
                <Col
                  sm={3}
                  xs={3}
                  style={({ paddingLeft: 0 }, { paddingRight: 0 })}
                >
                  <a href="single">
                    <img src="images/ng4.jpg" alt=" " />
                  </a>
                </Col>
              </Row>
              <Row id="lsGame">
                <Col
                  sm={3}
                  xs={3}
                  style={({ paddingLeft: 0 }, { paddingRight: 0 })}
                >
                  <a href="single">
                    <img src="images/ng5.jpg" alt=" " />
                  </a>
                </Col>
                <Col
                  sm={3}
                  xs={3}
                  style={({ paddingLeft: 0 }, { paddingRight: 0 })}
                >
                  <a href="single">
                    <img src="images/ng6.jpg" alt=" " />
                  </a>
                </Col>
                <Col
                  sm={3}
                  xs={3}
                  style={({ paddingLeft: 0 }, { paddingRight: 0 })}
                >
                  <a href="single">
                    <img src="images/ng7.jpg" alt=" " />
                  </a>
                </Col>
                <Col
                  sm={3}
                  xs={3}
                  style={({ paddingLeft: 0 }, { paddingRight: 0 })}
                >
                  <a href="single">
                    <img src="images/ng8.jpg" alt=" " />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm xs={12}>
              <a href="/">
                <h4>
                  Games{" "}
                  <img className="sz-12Logo" src="images/f1.png" alt=" " /> Zone
                </h4>
              </a>
              <hr />
              <p>
                Donec lobortis diam eu auctor porta. Phasellus in elementum
                tortor, sit amet imperdiet urna pellentesque non risus porta.
              </p>
              <p class="agileinfo">
                Suspendisse convallis malesuada libero, non rutrum arcu
                pellentesque lacinia.
              </p>
            </Col>
          </Row>
          <div class="copyright">
            <p>&copy; HuanBee 2020. All Rights Reserved</p>
          </div>
        </Container>
      </div>
    );
  }
}

export default FooterLayout;
