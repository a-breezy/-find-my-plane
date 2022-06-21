import React from "react";

function Status() {
	// pass status down from App.js so that this renders whenever 
	// state of status changes
	let Test = {
		flightNumber: "AB123",
		ArrivalTime: "12:30",
		Location: "New York",
	};
	return (
		<div>
			<ul className="status-details">
				<li>Flight Number: {Test.flightNumber}</li>
				<li>Arrival Time: {Test.ArrivalTime}</li>
				<li>Location: {Test.Location}</li>
			</ul>
		</div>
	);
}

export default Status;
