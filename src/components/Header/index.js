import React from "react";
import "./index.css";
import { Link } from 'react-router-dom'


class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <div className="Header-logo">
          <strong>Everyday-Mission</strong>
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
