import React, { useEffect } from "react";

function Home(props) {
	const { flightStatus = [], currentStatus, setCurrentStatus } = props;

	useEffect(() => {
		document.title = currentStatus.name;
	}, [currentStatus]);

	function handleOnTime(e) {
		e.preventDefault();
		setCurrentStatus(flightStatus[1]);
	}

	function handleDelayed(e) {
		e.preventDefault();
		setCurrentStatus(flightStatus[2]);
	}
	function handleCancelled(e) {
		e.preventDefault();
		setCurrentStatus(flightStatus[3]);
	}

	return (
		<div>
			<div>
				<input
					type="text"
					placeholder="Enter Flight Number"
					className="flight-search"
				></input>
				<button type="button">enter</button>
			</div>
			<div>
				<button type="button" onClick={handleOnTime}>
					On Time
				</button>
				<button type="button" onClick={handleDelayed}>
					Delayed
				</button>
				<button type="button" onClick={handleCancelled}>
					Cancelled
				</button>
			</div>
		</div>
	);
}

export default Home;
