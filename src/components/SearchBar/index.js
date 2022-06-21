import React, { useEffect } from "react";

function SearchBar(props) {
	const { flightStatus = [], setCurrentStatus, currentStatus } = props;

	// useEffect(() => {
	// 	document.title = currentStatus.name;
	// }, [currentStatus]);

	function handleOnTime(e) {
		e.preventDefault();
		currentStatus = setCurrentStatus(flightStatus[1]);
	}

	// function handleDelayed(e) {
	// 	e.preventDefault();
	// 	currentStatus = setCurrentStatus(flightStatus[2]);
	// }
	// function handleCancelled(e) {
	// 	e.preventDefault();
	// 	currentStatus = setCurrentStatus(flightStatus[3]);
	// }

	return (
		<div>
			<div className="flight-search">
				<input type="text" placeholder="Enter Flight Number" />
				<button type="button">enter</button>
			</div>
			<div>
				<button type="button" onClick={handleOnTime}>
					On Time
				</button>
				<button type="button" onClick={handleOnTime}>
					Delayed
				</button>
				<button type="button" onClick={handleOnTime}>
					Cancelled
				</button>
			</div>
		</div>
	);
}

export default SearchBar;
