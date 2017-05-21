import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



class BSTable extends Component {
  render() {
    return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='identifier' isKey={ true }>identifier</TableHeaderColumn>
          <TableHeaderColumn dataField='title'>title</TableHeaderColumn>
          <TableHeaderColumn dataField='description'>description</TableHeaderColumn>
          <TableHeaderColumn dataField='assigned_to'>assigned_to</TableHeaderColumn>
        </BootstrapTable>
    );
  }
}

export default BSTable;
