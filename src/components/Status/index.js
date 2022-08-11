import React from "react";

function Status() {
	// pass status down from App.js so that this renders whenever
	// state of status changes
	let Test = {
		status: "On Time",
		flightNumber: "AB1234",
		departureTime: "12:30",
		newDepartureTime: "13:30",
		arrivalTime: "21:30",
		newArrivalTime: "22:30",
		origin: "Los Angeles",
		destination: "New York",
		airline: "Ryan Air",
	};

	return (
		<div>
			<li>Status: {Test.status}</li>
			<div className="status-box">
				<div>
					<ul className="status-details">
						<li>{Test.airline}</li>
						<li>Departure Time: {Test.departureTime}</li>
						{/* if delayed */}
						<li>New Departure Time: {Test.newDepartureTime}</li>
						<li>Origin: {Test.origin}</li>
						<li>Destination: {Test.destination}</li>
					</ul>
				</div>
				<div>
					<ul className="status-details">
						<li>Flight Number: {Test.flightNumber}</li>
						<li>Arrival Time: {Test.arrivalTime}</li>
						{/* if delayed */}
						<li>New Arrival Time: {Test.newArrivalTime}</li>
						<li>Destination: {Test.destination}</li>
						<li>{Test.airline}</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Status;
