import React, { Component } from 'react';
import DashPieChart from './DashPieChart';
import DashRadPieChart from './DashRadPieChart';
import TableHeader from './TableHeader';
import TableGridExpandable from './TableGridExpandable';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            Good Day
          </div>
          <div className="col-md-4">
            <DashPieChart />
          </div>

        </div>
        <div className="row">
          <div className="col-md-6">
            <DashRadPieChart />
          </div>
          <div className="col-md-6">
            Some other mod here
          </div>
        </div>
        <div className="row">
          <TableHeader title="SP-123-A7X456789" />
        </div>
        <div className="row">
          <TableGridExpandable />
        </div>
      </div>


    );
  }
}

export default Dashboard;
