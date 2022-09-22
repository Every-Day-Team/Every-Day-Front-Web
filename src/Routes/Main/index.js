import React from "react";
import "./index.css";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Status from "../../components/Status";
class Main extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Aside />
        <div className="container">
          <Status />
        </div>
      </div>
    );
  }
}

export default Main;
