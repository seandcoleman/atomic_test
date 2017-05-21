import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

class LeftNav extends Component {
  render() {
    return (
      <div>
      <div style={{background: '#2c3e50', color: '#FFF'}}>
          <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>
              <Nav id='dashboard'>
                  <NavIcon></NavIcon><NavText> Dashboard </NavText>
              </Nav>
              <Nav id='projects'>
                  <NavText> Projects </NavText>
              </Nav>
              <Nav id='tasks'>
                  <NavText> Tasks </NavText>
              </Nav>
          </SideNav>
      </div>
      </div>
    );
  }
}

export default LeftNav;
