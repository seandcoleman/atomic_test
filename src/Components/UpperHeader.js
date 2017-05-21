import React, { Component } from 'react';

class UpperHeader extends Component {
  render() {
    return (
      <div className="row"> 
        <nav className="navbar navbar-inverse App-header">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">XYZ Corp</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Elroy Jetson</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default UpperHeader;
