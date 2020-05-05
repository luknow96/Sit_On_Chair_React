import React, { Component } from "react";
import checkboxImg from "../assets/images/form_ok.jpg";
import redChair from "../assets/images/red_chair.png";
class Contact extends Component {
  state = {
    userName: "",
    userEmail: "",
    message: "",
    checkboxStatus: false,
    currentWidth: window.innerWidth,
    mobile: true,
    form_ok: false,
    form_err: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  checkboxClick = () => {
    if (this.state.checkboxStatus === false) {
      this.setState({
        checkboxStatus: true,
      });
    } else if (this.state.checkboxStatus === true) {
      this.setState({
        checkboxStatus: false,
      });
    }
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

  validate = (e) => {
    e.preventDefault();
    if (
      this.state.userName.length >= 3 &&
      this.state.userEmail.indexOf("@") > -1 &&
      this.state.message.length > 10 &&
      this.state.checkboxStatus === true
    ) {
      this.setState({
        form_ok: true,
      });
    } else {
      this.setState({
        form_err: true,
      });
    }
  };
  render() {
    return (
      <>
        {this.state.mobile ? (
          <div className="mobileContactWrap">
            <header className="contactHeader">
              <h1 className="contactHeaderText">kontakt</h1>
              <span className="underlineLine"></span>
            </header>
            <form className="formBox" onSubmit={this.validate}>
              <input
                className="nameInput"
                name="userName"
                placeholder="Imię"
                type="text"
                onChange={this.handleChange}
              />
              <input
                className="emailInput"
                name="userEmail"
                placeholder="Email"
                type="e-mail"
                onChange={this.handleChange}
              />
              <textarea
                className="userMessage"
                name="message"
                placeholder="Twoja wiadomość"
                onChange={this.handleChange}
              />
              <div className="checkbox">
                <div className="tickBox" onClick={this.checkboxClick}>
                  {this.state.checkboxStatus ? (
                    <img
                      src={checkboxImg}
                      alt="checkboxImg"
                      className="checkboxImg"
                    />
                  ) : (
                    false
                  )}
                </div>
                <p className="agreeText">
                  Wyrażam zgodę na przetwarzanie danych osobowych
                </p>
              </div>
              <button className="send" type="submit">
                wyślij
              </button>
              {this.state.form_ok ? (
                <div className="confirmForm">
                  <p className="contactMessage">
                    Dziękujemy za kontakt wkrótcę się odezwiemy{" "}
                  </p>
                </div>
              ) : null}
              {this.state.form_err ? (
                <div className="formErr">
                  <p className="errContactMessage">Błędy w formularzu</p>
                </div>
              ) : null}
            </form>
          </div>
        ) : (
          <div className="desktopContactWrap">
            <div className="contactHeader">
              <h1 className="contactHeaderText">kontakt</h1>
              <div className="underlineLine"></div>
            </div>
            <div className="contactContent">
              <div className="leftSide">
                <form
                  className="contactForm"
                  noValidate
                  onSubmit={this.validate}
                >
                  <input
                    type="text"
                    placeholder="Imię"
                    className="userName"
                    name="userName"
                    onChange={this.handleChange}
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="userEmail"
                    name="userEmail"
                    onChange={this.handleChange}
                  />
                  <textarea
                    placeholder="Wiadomość"
                    className="userMessage"
                    name="message"
                    onChange={this.handleChange}
                  />
                  <button className="send" type="submit">
                    wyślij
                  </button>
                </form>
              </div>
              <div className="rightSide">
                <div className="redChairBox">
                  <img src={redChair} alt="redChair" className="redChairImg" />
                </div>
                <div className="checkbox">
                  <div className="tickBox" onClick={this.checkboxClick}>
                    {this.state.checkboxStatus ? (
                      <img
                        src={checkboxImg}
                        alt="checkboxImg"
                        className="checkboxImg"
                      />
                    ) : (
                      false
                    )}
                  </div>
                  <p className="agreeText">
                    Wyrażam zgodę na przetwarzanie danych osobowych
                  </p>
                  {this.state.form_ok ? (
                    <div className="confirmForm">
                      <p className="contactMessage">
                        Dziękujemy za kontakt wkrótcę się odezwiemy{" "}
                      </p>
                    </div>
                  ) : null}
                  {this.state.form_err ? (
                    <div className="formErr">
                      <p className="errContactMessage">Błędy w formularzu</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  componentWillUnmount = () => {
    window.addEventListener("resize", this.resize);
  };
}

export default Contact;
