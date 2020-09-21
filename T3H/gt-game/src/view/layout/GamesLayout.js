import React, { Component } from "react";
import Sub_HeaderLayout from "./Sub_HeaderLayout";
import FooterLayout from "./FooterLayout";
import { Container, Badge } from "react-bootstrap";
import Popup from "./components/Poup";

let games = [
  {
    id: 1,
    src: "images/g1.jpg",
    textName: "Image 1",
  },
  {
    id: 2,
    src: "images/g2.jpg",
    textName: "Image 2",
  },
  {
    id: 3,
    src: "images/g3.jpg",
    textName: "Image 3",
  },
  {
    id: 4,
    src: "images/g4.jpg",
    textName: "Image 4",
  },
];

class GamesLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      item: {
        imgUrl: "",
        texth4: "",
        textp1: "",
        textName: "",
        textDeveloper: "",
        textRequires: "",
        currenItem: 1,
      },
    };
  }

  togglePopup = (index) => {
    this.setState({
      showPopup: !this.state.showPopup,
      item: games[index]
    });
  };

  render() {
    var { item } = this.state;
    console.log("Item: ", item)
    return (
      <div>
        <Sub_HeaderLayout />

        <Container>
          <h1>
            <Badge variant="danger">Exclusive Games</Badge>
            <button onClick={this.togglePopup.bind(this)}>
              Click To Launch Popup
            </button>

            {this.state.showPopup ? (
              <Popup
                // imgUrl={imgUrl}
                // texth4={texth4}
                // textp1={textp1}
                // textName={textName}
                // textDeveloper={textDeveloper}
                // textRequires={textRequires}
                item={item}
                closePopup={this.togglePopup.bind(this)}
              />
            ) : null}

            <div className="gallery-grids">
              <div className="gallery-grid">
                {games.map((item, index) => (
                  <a
                    data-wow-delay=".5s"
                    onClick={(item) => this.togglePopup(index)}
                  >
                    <img src={item.src} alt=" " className="zoom-img" />
                  </a>
                ))}
              </div>
            </div>

            <div className="gallery-grids">
              <div className="gallery-grid">
                <a data-wow-delay=".5s" onClick={this.togglePopup.bind(this)}>
                  <img src="images/g1.jpg" alt=" " className="zoom-img" />
                </a>
                <a data-wow-delay=".5s" onClick={this.togglePopup.bind(this)}>
                  <img src="images/g2.jpg" alt=" " className="zoom-img" />
                </a>
              </div>
              <div className="gallery-grid">
                <a data-wow-delay=".5s">
                  <img src="images/g3.jpg" alt=" " className="zoom-img" />
                </a>
                <a data-wow-delay=".5s">
                  <img src="images/g5.jpg" alt=" " className="zoom-img" />
                </a>
              </div>
              <div className="gallery-grid">
                <a data-wow-delay=".5s">
                  <img src="images/g6.jpg" alt=" " className="zoom-img" />
                </a>
                <a data-wow-delay=".5s">
                  <img src="images/g7.jpg" alt=" " className="zoom-img" />
                </a>
              </div>
              <div className="gallery-grid">
                <a data-wow-delay=".5s">
                  <img src="images/g4.jpg" alt=" " className="zoom-img" />
                </a>
                <a data-wow-delay=".5s">
                  <img src="images/g8.jpg" alt=" " className="zoom-img" />
                </a>
              </div>
              <div className="clearfix"> </div>
            </div>
          </h1>
        </Container>
        <FooterLayout />
      </div>
    );
  }
}

export default GamesLayout;
