import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <div className="Header-logo">
          <Link to="/">
          {/* <img src={logo} alt="logo" width="60px"></img> */}
          <strong>매일매일🌳</strong>
          </Link>
          <div className="Header-login">
            <Link to="./Login">
              <button>login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
