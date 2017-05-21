import React, { Component } from 'react';

class HeaderNav extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-fixed-top App-header" role="navigation" >
        <div className="App-header container-fluid ">
            <div className="row navbar-default v-navbar-bg App-header">
               <div className="col-md-12">
                <div className="navbar-header">
                    <span>XYZ Company </span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <form className="navbar-form-expanded navbar-form" role="search">
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button className="btn btn-default">?</button>
                                  </span>
                                  <input type="text" className="form-control" data-width="170px" data-width-expanded="170px" placeholder="SEARCH" />
                                </div>
                            </form>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <form className="navbar-form navbar-right" role="search">
                                <select  className="form-control" placeholder="Select View">
                                    <option>View 1</option>
                                    <option>View 2</option>
                                </select>
                            </form>
                       </li>

                        <li className="dropdown-grid">
                          <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">:) Elroy Jetson</a>
                          <div className="dropdown-grid-wrapper" role="menu">
                              <ul className="dropdown-menu col-xs-12 col-sm-4 col-md-3 col-lg-2" role="menu">
                                <li><a  href="/preferences">Settings</a></li>
                                <li><a href="/help">Help</a></li>
                                <li><a href="/logout">Sign Out</a></li>
                              </ul>
                          </div>
                        </li>

                    </ul>
                </div>
              </div>
            </div>
        </div>
      </nav>

      </div>
    );
  }
}

export default HeaderNav;
