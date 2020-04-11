import React, { Component } from "react";
import blackChair from "../assets/images/black_chair.png";
import redChair from "../assets/images/orange_chair.png";
class Slider extends Component {
  state = {
    index: 0,
    slideList: [
      {
        img: blackChair,
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      },
      {
        img: redChair,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id mattis purus. Morbi condimentum velit nec urna malesuada, sed dictum nunc accumsan.",
      },
    ],
  };

  nextImg = () => {
    if (this.state.index < this.state.slideList.length - 1) {
      this.setState({
        index: this.state.index + 1,
      });
    } else if (this.state.index < this.state.slideList.length) {
      this.setState({
        index: 0,
      });
    }
  };
  prevImg = () => {
    if (this.state.index <= this.state.slideList.length - 1) {
      this.setState({
        index: this.state.index - 1,
      });
    }
    if (this.state.index <= 0) {
      this.setState({
        index: this.state.slideList.length - 1,
      });
    }
  };

  render() {
    return (
      <div className="sliderWrap">
        {this.state.mobile ? (
          <div className="mobileSlider">
            <div className="leftArrow" onClick={this.prevImg}>
              <i className="fas fa-chevron-left" />
            </div>
            <div className="sliderContent">
              <img
                className="chairImg"
                src={this.state.slideList[this.state.index].img}
                alt="chairImage"
              />
              <p className="chairDescription">
                {this.state.slideList[this.state.index].text}
              </p>
              <button className="showMore">Zobacz więcej</button>
            </div>
            <div className="rightArrow " onClick={this.nextImg}>
              <i className="fas fa-chevron-right" />
            </div>
          </div>
        ) : (
          <div className="desktopSlider"></div>
        )}
      </div>
    );
  }
  componentWillUnmount = () => {
    window.addEventListener("resize", this.resize);
  };
}

export default Slider;
