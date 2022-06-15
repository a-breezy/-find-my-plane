import React from "react";

function OnTime() {
	let onTimeTest = {
		flightNumber: "AB123",
		ArrivalTime: "12:30",
		Location: "New York",
	};
	return (
		<div className="App-body">
			<h1>On Time</h1>
			<ul className="status-details">
				<li>Flight Number: {onTimeTest.flightNumber}</li>
				<li>Arrival Time: {onTimeTest.ArrivalTime}</li>
				<li>Location: {onTimeTest.Location}</li>
			</ul>
		</div>
	);
}

export default OnTime;
