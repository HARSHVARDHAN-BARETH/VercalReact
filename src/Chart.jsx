import React, { Component, useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
const API = "https://jsonplaceholder.typicode.com/users";

//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Chart extends Component {	

	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Number of New Employees"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "Romaguera-Crona" },
					{ y: 24, label: "Deckow-Crist                    " },
					{ y: 20, label: "Romaguera-Jacobson" },
					{ y: 14, label: "Robel-Corkery" },
					{ y: 12, label: "Keebler LLC" },
					{ y: 10, label: "Johns Group" }	
				]
			}]
		}
		  
        

		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
export default Chart;     