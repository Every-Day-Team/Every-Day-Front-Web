import React, { Component } from 'react';
import Header from "../Header";
import Aside from "../Aside";
import MemoHeader from "../MemoHeader";
import MemoLayout from '../MemoLayout';

class MemoComponents extends Component {
  render() {
    return (
        <div className="App">
        <Header />
        <Aside />
        <div className="container">
        <MemoLayout>
                <MemoHeader/>
                hello
            </MemoLayout>
        </div>
        </div>
    );
  }
}

export default MemoComponents;
