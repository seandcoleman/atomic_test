import React, { Component } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
      {name: 'Requirments 1', uv: 31.47, pv: 2400, fill: '#8884d8'},
      {name: 'Project 2', uv: 26.69, pv: 4567, fill: '#83a6ed'},
      {name: 'Alph', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
      {name: 'Beta', uv: 8.22, pv: 9800, fill: '#82ca9d'},
      {name: 'Zulu', uv: 8.63, pv: 3908, fill: '#a4de6c'},
      {name: 'Gathered', uv: 2.63, pv: 4800, fill: '#d0ed57'},
      {name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658'}
    ];

  const style = {
  	top: 0,
  	left: 350,
  	lineHeight: '24px'
  };



class DashRadPieChart extends Component{
	// constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeIndex: 0,
  //   };
  // }
  //
  // onPieEnter(data, index) {
  //   this.setState({
  //     activeIndex: index,
  //   });
  // }


//width={500} height={300}
	render() {
  	return (
      <RadialBarChart  width={300} height={300}  cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
        <RadialBar minAngle={15} label background clockWise={true} dataKey='uv'/>
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
    );
  }
}

export default DashRadPieChart;
