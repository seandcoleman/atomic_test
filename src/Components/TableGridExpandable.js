import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

var data = [{
	"name": "SP-20086219-01-01",
	"created": "2016-05-05T00:00:00Z",
	"version": 1.0,
	"requirements": [{
		"identifier": "1",
		"title": "General description",
		"description": "The RS-232 control. A number of serial commands are implemented in the firmware of the match which the customer can directly send from his system to the match via the RS-232 interface. Full details of the serial command set can be found in [3]",
		"assigned_to": "David Crone",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "2",
		"title": "Design and document control",
		"description": "The matching network and this document are under strict revision control. No changes will be allowed to the design without prior notification and approval. This document may be revised as more data or information becomes available. Any changes to this document will be detailed as a revision change and will be provided to the customer in a timely manner.",
		"assigned_to": "David Crone",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3",
		"title": "Specifications",
		"description": "",
		"assigned_to": "David Crone",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3.1",
		"title": "RF Power and Tuning",
		"description": "",
		"assigned_to": "Sidthi Sanjanwala",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3.1.1",
		"title": "Frequency of operation",
		"description": "Frequency of operation is 430 kHz +/- 1.0%.",
		"assigned_to": "Sidthi Sanjanwala",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3.1.2",
		"title": "RF input power range",
		"description": "The RF input power range is 100 Watts to 6,000 Watts CW.\n\nFor load impedances below 40Ω, the power has to be reduced in order to avoid damage to the match (see section 3.1.8 for details).",
		"assigned_to": "David Crone",
		"status": "pending",
		"tag": "inbox",
	}, {
		"identifier": "3.1.3",
		"title": "RF input connector",
		"description": "The RF input connector is a straight Type “7/16” female with a QC base.",
		"assigned_to": "Sidthi Sanjanwala",
		"status": "pending",
		"tag": "inbox",
	}]
}]

class TableGridExpandable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Default expanding row
      expanding: [ 1 ]
    };
  }

  isExpandableRow() {
      return true;
    }

    expandComponent(row) {
      return (
        <div>{ data.description }</div>
      );
    }

  render() {
    const options = {
      expandRowBgColor: 'rgb(66, 134, 244)',
      expanding: this.state.expanding
    };
    return (
      <BootstrapTable data={ data }
        options={ options }
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
      >
        <TableHeaderColumn dataField='identifier' isKey>Requirment ID</TableHeaderColumn>
        <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
        <TableHeaderColumn dataField=''>Actions</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default TableGridExpandable;
