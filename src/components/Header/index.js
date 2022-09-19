import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
import Login from '../Login';



class Header extends React.Component {
  render() {

    return (
 
      <div className="App-header">
        <div className="Header-logo">
          <strong>Everyday-Mission</strong>
        </div>
        <div className="Header-login">
          <button><Link to='Login'>login</Link></button>
        </div>
      </div>

    );
  }
}

export default Header;
