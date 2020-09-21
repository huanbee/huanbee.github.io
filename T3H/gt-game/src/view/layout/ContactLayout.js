import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  Container,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";
import FooterLayout from "./FooterLayout";
import Sub_HeaderLayout from "./Sub_HeaderLayout";
import Iframe from "react-iframe";

class ContactLayout extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <Sub_HeaderLayout></Sub_HeaderLayout>

        <Container>
          <h1>
            <Badge variant="danger">Reach Us</Badge>
          </h1>
          <Row>
            <Col sm={4} xs={12} className="contact-left-agile">
              <div style={{ marginBottom: "20px" }}>
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
                <a href="mailto:huanbee97@gmail.com">
                  <img src="images/contact/mail.png" style={{ width: 16 }} />{" "}
                  huanbee97@gmail.com
                </a>
              </div>
            </Col>
            <Col sm xs={12}>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom01" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Form.Row >
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
                    <Form.Control
                      as="textarea"
                      placeholder="Message"
                      style={{ height: "150px" }}
                      required
                    />
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
        <div className="mapGoogle">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.980384379247!2d105.81945410425034!3d21.022778763209775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1596110442162!5m2!1svi!2s"
            width="100%"
            height="450px"
            display="initial"
            position="relative"
          />
        </div>
        <FooterLayout></FooterLayout>
      </div>
    );
  }
}

export default ContactLayout;
