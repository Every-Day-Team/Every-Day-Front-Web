import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Routes/Main";
import Login from "../components/Login";
import My from "../components/My";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/My" element={<My />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
