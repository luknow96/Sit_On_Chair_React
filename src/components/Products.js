import React, { Component } from "react";
import firstProducts from "../assets/images/box1_img.jpg";
import secondProducts from "../assets/images/box2_img.jpg";
class Products extends Component {
  state = {
    currentWidth: window.innerWidth,
    mobile: true,
  };
  componentDidMount = () => {
    if (this.state.currentWidth >= 1024) {
      this.setState({
        mobile: false,
      });
    } else if (this.state.currentWidth < 1024) {
      this.setState({
        mobile: true,
      });
    }
    window.addEventListener("resize", this.resize);
  };
  resize = () => {
    this.setState({
      currentWidth: window.innerWidth,
    });
    if (this.state.currentWidth < 1024) {
      this.setState({
        mobile: true,
      });
    } else if (this.state.currentWidth >= 1024) {
      this.setState({
        mobile: false,
      });
    }
  };
  render() {
    return (
      <div className="productsWrap">
        <div className="box">
          <img className="boxImages" alt="productsImg" src={firstProducts} />
          <div className="productBar">
            <p className="productName">Chair Clair</p>
            <span className="productNameUnderline"></span>
          </div>
        </div>
        <div className="box">
          <img className="boxImages" alt="productsImg" src={secondProducts} />
          <div className="productBar">
            <p className="productName">Chair Margerita</p>
            <span className="productNameUnderline"></span>
          </div>
        </div>
        <div className="boxText">
          <h1 className="boxTitle">Finds Inputs</h1>
          <span className="productNameUnderline"></span>
          <p className="boxContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            convallis nisi odio. In elit nulla, viverra id consectetur a,
            efficitur eu eros. Aliquam bibendum vel diam ac congue. Donec ut
            hendrerit augue, vitae feugiat lectus. Nunc eu ultricies arcu. Sed
            sed nunc magna. Pellentesque habitant.
          </p>
        </div>
      </div>
    );
  }
  componentWillUnmount = () => {
    window.addEventListener("resize", this.resize);
  };
}

export default Products;
