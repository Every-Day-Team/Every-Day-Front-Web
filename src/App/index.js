import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Routes/Main";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import My from "../components/My";
import Mission from "../components/Mission";
import TodoList from "../components/TodoList";
import Posting from "../components/Posting";
import AllMission from "../components/AllMission";
import MemoComponents from "../components/MemoComponents";

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
          <Route path="/Posting" element={<Posting />}></Route>
          <Route path="/TodoList" element={<TodoList />}></Route>
          <Route path="/MemoComponents" element={<MemoComponents />}></Route>
          <Route path="/mission" element={<Mission />}></Route>
          <Route path="/Allmission" element={<AllMission />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
