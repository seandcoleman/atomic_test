import React, { Component } from 'react';


class TableHeader extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     project: { name: 'SP-123-A7X456789'},
  //   };
  // }

  render() {
    return (
      <div id="topbar">
  			<h1>Project {this.props.title}</h1>
  		</div>
    );
  }
}

export default TableHeader;
