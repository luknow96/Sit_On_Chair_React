import React, { Component } from "react";
class Price extends Component {
  state = { currentWidth: window.innerWidth, mobile: true };
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
      <div className="priceWrap">
        <header className="priceHeader">
          <h1 className="priceHeaderText">Cennik</h1>
          <span className="underlineLine"></span>
        </header>
        <main className="priceBox">
          <div className="box-1">
            <div className="firstCircle">
              <div className="secondCircle"></div>
            </div>
            <div className="planNameBox">
              <h1 className="planTitle">basic plan</h1>
            </div>
            <div className="priceCircle">
              <p className="priceValue">
                85 <sup>99</sup>
              </p>
              <p className="priceDuration">pln/msc</p>
            </div>
            <div className="servicesBox">
              <div className="item-1">
                <p className="serviceTitle">Zakup towaru + dowóz</p>
              </div>
              <div className="item-2">
                <p className="serviceTitle">Serwis</p>
              </div>
            </div>
            <button className="joinButton">Dołącz</button>
          </div>

          <div className="box-2">
            <div className="firstCircle">
              <div className="secondCircle"></div>
            </div>
            <div className="planNameBox">
              <h1 className="planTitle">standart plan</h1>
            </div>
            <div className="priceCircle">
              <p className="priceValue">
                95 <sup>99</sup>
              </p>
              <p className="priceDuration">pln/msc</p>
            </div>
            <div className="servicesBox">
              <div className="item-1">
                <p className="serviceTitle">Zakup towaru + dowóz</p>
              </div>
              <div className="item-2">
                <p className="serviceTitle">Serwis</p>
              </div>
              <div className="item-3">
                <p className="serviceTitle">Gwarancja 5 lat</p>
              </div>
            </div>
            <button className="joinButton">Dołącz</button>
          </div>
          <div className="box-3">
            <div className="firstCircle">
              <div className="secondCircle"></div>
            </div>
            <div className="planNameBox">
              <h1 className="planTitle">advance plan</h1>
            </div>
            <div className="priceCircle">
              <p className="priceValue">
                211 <sup>99</sup>
              </p>
              <p className="priceDuration">pln/msc</p>
            </div>
            <div className="servicesBox">
              <div className="item-1">
                <p className="serviceTitle">Zakup towaru + dowóz</p>
              </div>
              <div className="item-2">
                <p className="serviceTitle">Serwis</p>
              </div>
              <div className="item-3">
                <p className="serviceTitle">Gwarancja 6 lat</p>
              </div>
              <div className="item-4">
                <p className="serviceTitle">Porady projektanta</p>
              </div>
            </div>
            <button className="joinButton">Dołącz</button>
          </div>
        </main>
      </div>
    );
  }
  componentWillUnmount = () => {
    window.addEventListener("resize", this.resize);
  };
}

export default Price;
