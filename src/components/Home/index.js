import React from "react";

function Home() {
	function handleOnTime(e) {
		e.preventDefault();
		console.log("on time");
		// flightStatus = onTime;
	}

	function handleDelayed(e) {
		e.preventDefault();
		console.log("delayed");
		// flightStatus = delayed;
	}
	function handleCancelled(e) {
		e.preventDefault();
		console.log("cancelled");
		// flightStatus = cancelled;
	}

	return (
		<main className="App-body">
			<h1>Find My Plane</h1>
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
		</main>
	);
}

export default Home;
