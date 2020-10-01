import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

class Popup extends React.Component {
  render() {
  const {item}= this.props;
    console.log("Props Item: ", this.props.item);
    return (
      <div className="popup">
        <div className="popup_inner">
          <button onClick={this.props.closePopup}>×</button>
          <div className="popup_table">
            <Row>
              <Col sm={6} xs={12}>
                <img src={this.props.item.src} className="zoom-img" />
                <div className="clearfix"></div>
              </Col>
              <Col sm={6} xs={12}>
                <h4>{this.props.texth4}</h4>
                <p>{this.props.textp1}</p>
                <div className="span span1">
                  <p className="left">NAME</p>
                  <p className="right">: {this.props.item.textName}</p>
                  <div className="clearfix"></div>
                </div>
                <div className="span span2">
                  <p className="left">DEVELOPER</p>
                  <p className="right">: {this.props.textDeveloper}</p>
                  <div className="clearfix"></div>
                </div>
                <div className="span span3">
                  <p className="left">REQUIRES</p>
                  <p className="right">: {this.props.textRequires}</p>
                  <div className="clearfix"></div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
