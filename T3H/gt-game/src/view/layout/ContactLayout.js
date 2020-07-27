import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  Button,
} from "react-bootstrap";
import SliderLayout from "./SliderLayout";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";

class ContactLayout extends Component {
  render() {
    return (
      <div>
          <div className="sub-banner">
          {/* Navbar */}
          <HeaderLayout></HeaderLayout>
          </div>
        <Container>
          <Row>
            <Col sm={4} xs={12}>
              <div>
                <h4>Address</h4>
                <p>
                  <img
                    src="images/contact/location.png"
                    style={{ width: 16 }}
                  />{" "}
                  Ha Noi, Viet Nam
                </p>
                <br />
                <h4>Phone</h4>
                <p>
                  <img src="images/contact/call.png" style={{ width: 16 }} />{" "}
                  +84 369140123
                </p>
                <br />
                <h4>Email</h4>
                <a href="mailto:example@mail.com">
                  <img src="images/contact/mail.png" style={{ width: 16 }} />{" "}
                  ex@mail.com
                </a>
              </div>
            </Col>
            <Col sm xs={12}>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} md="6" controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid address.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Message" style={{height:'150px'}} required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Message.
                    </Form.Control.Feedback>
                  </Form.Group>

                  
                 
                </Form.Row>
                
                <Button type="submit">Send Message</Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}

export default ContactLayout;
