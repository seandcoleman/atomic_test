import React, { Component } from 'react';
import LeftColumn from './Components/LeftColumn';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-2">
          <LeftColumn />
        </div>
        <div className="col-sm-10">
          <Header />
        </div>
        <div className="col-sm-10" style={{backgroundColor:'#F9F9F9', boarderRadius:'4px'}}>
            <Dashboard />
        </div>
      </div>

    );
  }
}

export default App;
