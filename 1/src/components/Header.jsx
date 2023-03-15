import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="name">
          <h1>Tyagaraj Naik</h1>
        </div>
        <div className="general-info">
          <address>
            Shirwad near ganapthi nagar karwar pincode 581306
          </address>
          <p>7975886469</p>
          <p>tyagarajnaik666@gmail.com</p>
          <p>
            Github:{" "}
            <a href="https://github.com/tyagarajN">Tyagaraj</a>
          </p>
        </div>
      </div>
    );
  }
}
