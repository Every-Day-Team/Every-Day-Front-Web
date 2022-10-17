import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Routes/Main";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import My from "../components/My";
import Mission from "../components/Mission";
// import Landing from "../components/Landing";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/my" element={<My />}></Route>
          <Route path="/mission" element={<Mission />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
