import React, { Component } from "react";
import Sub_HeaderLayout from "./Sub_HeaderLayout";
import FooterLayout from "./FooterLayout";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
  Breadcrumb,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faTag, faEdit } from "@fortawesome/free-solid-svg-icons";

class SingleLayout extends Component {
  render() {
    return (
      <div>
        <Sub_HeaderLayout />
        {/* <!-- breadcrumbs --> */}
        <div style={{ backgroundColor: "#E9ECEF" }}>
          <Container>
            <Breadcrumb>
              <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Single</Breadcrumb.Item>
            </Breadcrumb>
          </Container>
        </div>

        {/* <!-- //breadcrumbs --> */}

        {/* <!-- single --> */}
        <Container>
          <Row>
            <Col sm={7} xs={12} className="wthree_blog_left">
              <div className="wthree_blog_left_grid">
                <div className="wthree_blog_left_grid_slider">
                  <img src="images/s1.jpg" alt=" " className="img-responsive" />
                </div>
                <h4>Games Zone</h4>
                <h3>facilisis velit vitae gravida imperdiet</h3>
                <ul>
                  <li>
                  <FontAwesomeIcon icon={faUser}/>
                    <a href="#">Jan Mark</a>
                    <i>|</i>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faHeart}/>
                    <a href="#"> 20</a>
                    <i>|</i>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faTag}/>
                    <a href="#">5</a>
                    <i>|</i>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faEdit}/>
                    Voluptatibus
                  </li>
                </ul>
                <p>
                  Duis venenatis, mi quis malesuada ultricies, nisi nisl posuere
                  sapien, id egestas lectus urna et massa. Morbi mauris turpis,
                  posuere auctor auctor ornare, auctor nec lectus. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                  <i>
                    Nulla faucibus, arcu at consequat vulputate, turpis metus
                    blandit urna, quis suscipit orci nibh nec est. Phasellus
                    tempus augue turpis. Fusce nec tellus blandit, ullamcorper
                    sapien vel, placerat erat. Nam non massa elit. Morbi
                    placerat molestie felis. Integer facilisis velit leo, vitae
                    gravida elit fringilla nec.
                  </i>
                  Quisque id nunc nec risus molestie aliquam. Donec ex eros,
                  lobortis et lorem quis, sagittis malesuada lectus. Suspendisse
                  ornare sed purus a imperdiet. Integer viverra nisi orci, in
                  volutpat leo ornare vitae.
                </p>
              </div>
              <div className="agileits_share">
                <ul>
                  <li>
                    <a className="linkedin" href="#"></a>
                  </li>
                  <li>
                    <a className="google" href="#"></a>
                  </li>
                  <li>
                    <a className="twitter" href="#"></a>
                  </li>
                  <li>
                    <a className="facebook" href="#"></a>
                  </li>
                </ul>
              </div>
              <div className="agileits_reply">
                <h3>Leave a reply</h3>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom01">
                      <Form.Control required type="text" placeholder="Name" />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        required
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom03">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Subject"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom04">
                      <Form.Control
                        as="textarea"
                        placeholder="Type your comment..."
                        style={{ height: "150px",marginBottom:0 }}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid comment....
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Button type="Submit" style={{marginBottom:"30px"}}>Submit</Button>
                </Form>
              </div>
            </Col>
            <Col sm={5} xs={12}>
              <div className="single_search">
                <Form>
                  <Form.Row>
                    <FormControl type="text" placeholder="Search on our blog" />
                    <Button variant="outline-success">Search</Button>
                  </Form.Row>
                </Form>
              </div>

              <div className="w3l_categories">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="single">
                      Vitae gravida elit fringilla nec sociosqu
                    </a>
                  </li>
                  <li>
                    <a href="single">
                      Morbi mauris turpis, posuere auctor auctor
                    </a>
                  </li>
                  <li>
                    <a href="single">
                      Class aptent taciti sociosqu litora torquent
                    </a>
                  </li>
                  <li>
                    <a href="single">
                      Duis venenatis, mi quis malesuada ultricies
                    </a>
                  </li>
                  <li>
                    <a href="single">
                      Egestas lectus urna et massa morbi mauris
                    </a>
                  </li>
                  <li>
                    <a href="single">
                      Torquent conubia nostra inceptos himenaeos
                    </a>
                  </li>
                  <li>
                    <a href="single">
                      Urna et massa morbi mauris turpis, posuere
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w3l_archives">
                <h3>Archives</h3>
                <ul>
                  <li>2 August 2017</li>
                  <li>14 August 2017</li>
                  <li>23 August 2017</li>
                  <li>8 September 2017</li>
                  <li>18 September 2017</li>
                </ul>
              </div>
              <div className="w3agile_flickr_posts">
                <h3>Flickr Posts</h3>
                <div className="w3agile_flickr_post_left">
                  <a href="single">
                    <img src="images/ng1.jpg" alt=" " className="img-responsive" />
                  </a>
                </div>
                <div className="w3agile_flickr_post_left">
                  <a href="single">
                    <img src="images/ng2.jpg" alt=" " className="img-responsive" />
                  </a>
                </div>
                <div className="w3agile_flickr_post_left">
                  <a href="single">
                    <img src="images/ng3.jpg" alt=" " className="img-responsive" />
                  </a>
                </div>
                <div className="w3agile_flickr_post_left">
                  <a href="single">
                    <img src="images/ng4.jpg" alt=" " className="img-responsive" />
                  </a>
                </div>
                <div className="w3agile_flickr_post_left">
                  <a href="single">
                    <img src="images/ng5.jpg" alt=" " className="img-responsive" />
                  </a>
                </div>
                <div className="w3agile_flickr_post_left">
                  <a href="single">
                    <img src="images/ng6.jpg" alt=" " className="img-responsive" />
                  </a>
                </div>
                <div className="clearfix"> </div>
              </div>
            </Col>
          </Row>
        </Container>

        <FooterLayout />
      </div>
    );
  }
}

export default SingleLayout;
