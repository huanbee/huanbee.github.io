import React, { Component } from "react";
import Sub_HeaderLayout from "./Sub_HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Badge, Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart, faUser, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";

class NewsLayout extends Component {
  render() {
    return (
      <div>
        <Sub_HeaderLayout />
        <h1>
          <Badge variant="danger">News</Badge>
        </h1>

        <Row>
          <Col sm={7} xs={12} className="events-left-agile-agileits-w3layouts">
            <a href="single">
              <div className="events-text-w3-agile events-text1">
                <h4>June 20, 2017</h4>
                <p>Phasellus faucibus semper eros, quis mauris </p>
                <ul>
                  <li>by Admin</li>
                  <li>
                    <FontAwesomeIcon icon={faHeart} /> 10
                  </li>
                </ul>
              </div>
            </a>
          </Col>

          <Col sm={5} xs={12} className="events-right-agile">
            <a href="single">
              <div className="events-right-top">
                <div className="events-text-w3-agile events-text2">
                  <h4>July 20, 2017</h4>
                  <p>Aenean imperdiet volutpat tortor </p>
                  <ul>
                    <li>by Admin</li>
                    <li>
                      <FontAwesomeIcon icon={faHeart} /> 20
                    </li>
                  </ul>
                </div>
              </div>
            </a>

            <a href="single">
              <div className="events-right-bottom">
                <div className="events-text-w3-agile events-text2">
                  <h4>Aug 20, 2017</h4>
                  <p>Fusce aliquam purus consectetur</p>
                  <ul>
                    <li>by Admin</li>
                    <li>
                      <FontAwesomeIcon icon={faHeart} /> 15
                    </li>
                  </ul>
                </div>
              </div>
            </a>
            <div className="clearfix"></div>
          </Col>
        </Row>

{/* Blog - news */}
        <div className="events-section2-agileinfo">
          <Container>
            <Row className="blog-news">
              <Col sm={4} xs={12} className="blog-image-w3l">
                <a href="single">
                  <img src="images/ng1.jpg" alt=" " />
                </a>
              </Col>
              <Col sm={8} xs={12} className="blog-text-w3ls">
                <a href="single">
                  <h4>Quisque in lectus erat</h4>
                </a>
                <div className="item_info">
                  <ul>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faUser}/> Admin
                      </a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCalendar}/> 14.May.2017
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faComment}/> 20 Comments
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faHeart}/> 300 Likes
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Aliquam suscipit neque massa, eu maximus felis gravida vel.
                  Vestibulum lacinia risus risus, ut iaculis felis fermentum id.
                  Cras at vulputate velit, vitae vestibulum augue. Etiam lorem
                  nunc, mattis ac dignissim sit amet, varius et ex. Phasellus
                  eleifend nibh justo, pulvinar cursus sapien commodo non.
                </p>
                <a href="single" className="blog-read">
                  Read More
                </a>
              </Col>
            </Row>
            <Row className="blog-news">
              <Col sm={4} xs={12} className="blog-image-w3l">
                <a href="single">
                  <img src="images/ng2.jpg" alt=" " />
                </a>
              </Col>
              <Col sm={8} xs={12} className="blog-text-w3ls">
                <a href="single">
                  <h4>In finibus vel metus</h4>
                </a>
                <div className="item_info">
                  <ul>
                    <li>
                      <a href="#">
                       <FontAwesomeIcon icon={faUser}/> Admin
                      </a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCalendar}/> 17.Aug.2017
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faComment}/> 20 Comments
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faHeart}/>300 Likes
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Aliquam suscipit neque massa, eu maximus felis gravida vel.
                  Vestibulum lacinia risus risus, ut iaculis felis fermentum id.
                  Cras at vulputate velit, vitae vestibulum augue. Etiam lorem
                  nunc, mattis ac dignissim sit amet, varius et ex. Phasellus
                  eleifend nibh justo, pulvinar cursus sapien commodo non.
                </p>
                <a href="single" className="blog-read">
                  Read More
                </a>
              </Col>
            </Row>
            <Row >
              <Col sm={4} xs={12} className="blog-image-w3l">
                <a href="single">
                  <img src="images/ng3.jpg" alt=" " />
                </a>
              </Col>
              <Col sm={8} xs={12} className="blog-text-w3ls">
                <a href="single">
                  <h4>Nam eget ligula eu</h4>
                </a>
                <div className="item_info">
                  <ul>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faUser}/> Admin
                      </a>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faCalendar}/> 24.Aug.2015
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faComment}/> 20 Comments
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      <FontAwesomeIcon icon={faHeart}/> 300 Likes
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  Aliquam suscipit neque massa, eu maximus felis gravida vel.
                  Vestibulum lacinia risus risus, ut iaculis felis fermentum id.
                  Cras at vulputate velit, vitae vestibulum augue. Etiam lorem
                  nunc, mattis ac dignissim sit amet, varius et ex. Phasellus
                  eleifend nibh justo, pulvinar cursus sapien commodo non.
                </p>
                <a href="single" className="blog-read">
                  Read More
                </a>
              </Col>
            </Row>
          </Container>
        </div>

        <FooterLayout />
      </div>
    );
  }
}

export default NewsLayout;
