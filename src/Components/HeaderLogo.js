import React, { Component } from 'react';
import logo from '../logo.svg';

class HeaderLogo extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <span>Atomic PLM</span>
      </div>
    );
  }
}

export default HeaderLogo;
