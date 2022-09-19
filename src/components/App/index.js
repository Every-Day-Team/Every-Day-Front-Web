import React from 'react';
import './index.css';
import Header from '../Header';
import Aside from '../Aside';
import Status from '../Status';
import Login from '../Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";



class App extends React.Component {

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Login" elements={<Login />} />
        </Routes>
        <Aside />
          <div className="container">
            <Status />
          </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
