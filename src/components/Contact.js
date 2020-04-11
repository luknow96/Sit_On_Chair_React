import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contactWrap">
        <header className="contactHeader">
          <h1 className="contactHeaderText">kontakt</h1>
          <span className="underlineLine"></span>
        </header>
        <form className="formBox">
          <input
            className="nameInput"
            name="userName"
            placeholder="Imię"
            type="text"
          />
          <input
            className="emailInput"
            name="userEmail"
            placeholder="Email"
            type="e-mail"
          />
          <textarea
            className="userMessage"
            name="message"
            placeholder="Twoja wiadomość"
          />
          <div className="checkbox">
            <div className="tickBox"></div>
            <p className="agreeText">
              Wyrażam zgodę na przetwarzanie danych osobowych
            </p>
          </div>
          <button className="send" type="submit">
            wyślij
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
