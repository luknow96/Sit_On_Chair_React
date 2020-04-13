import React, { Component } from "react";
class Header extends Component {
  state = {
    currentWidth: window.innerWidth,
    mobile: true,
    mobileMenu: false,
    dropDownActive: null,
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
  dropDownActive = () => {
    this.setState({
      dropDownActive: true,
    });
  };
  dropDownInactive = () => {
    this.setState({
      dropDownActive: false,
    });
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
  barsActive = () => {
    this.setState({
      mobileMenu: true,
    });
    if (this.state.mobileMenu === true) {
      this.setState({
        mobileMenu: false,
      });
    }
  };
  render() {
    return (
      <>
        {this.state.mobile ? (
          <div className="headerMobile">
            <div className="burgerBox">
              {this.state.mobileMenu ? (
                <i className="fas fa-times" onClick={this.barsActive} />
              ) : (
                <i className="fas fa-bars" onClick={this.barsActive} />
              )}
            </div>
            <div className="logoContent">
              <h1 className="logoText">
                sit <span className="changeColor">on</span> chair
              </h1>
            </div>
            {this.state.mobileMenu ? (
              <div className="barsMenuActive">
                <nav className="barsMenuContent">
                  <ul className="menuList">
                    <li className="item">O firmie </li>
                    <li className="item">Galeria</li>
                    <li className="item">Kontakt</li>
                  </ul>
                </nav>
              </div>
            ) : (
              <div className="barsMenuDisabled"></div>
            )}
          </div>
        ) : (
          <div className="headerDesktop">
            <div className="desktopLogo">
              <h1 className="logoText">
                sit <span className="changeColor">on</span> chair
              </h1>
            </div>
            <nav className="navBox">
              <ul className="navList">
                <li
                  className="item"
                  onMouseLeave={this.dropDownActive}
                  onMouseOut={this.dropDownInactive}
                >
                  O firmie
                  {this.state.dropDownActive ? (
                    <ul className="dropDown">
                      <li className="dropItem">Aktualności</li>
                      <li className="dropItem">Nasz Team</li>
                      <li className="dropItem">Historia</li>
                    </ul>
                  ) : (
                    false
                  )}
                </li>
                <li className="item">Galeria</li>
                <li className="item">Kontakt</li>
              </ul>
            </nav>
          </div>
        )}
      </>
    );
  }
  componentWillUnmount = () => {
    window.addEventListener("resize", this.resize);
  };
}

export default Header;
