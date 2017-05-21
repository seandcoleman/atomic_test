import React, { Component } from 'react';
import HeaderLogo from './HeaderLogo';
import LeftNav from './LeftNav';

class LeftColumn extends Component {
  render() {
    return (
      <div className="row" style={{background: '#2c3e50', color: '#FFF', minHeight: '500px'}}>
        <div>
          <HeaderLogo />
        </div>
        <div>
          <LeftNav />
        </div>
      </div>
    );
  }
}

export default LeftColumn;
