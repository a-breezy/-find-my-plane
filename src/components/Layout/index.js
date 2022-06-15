import React, { useState } from "react";

import Home from "../Home";
import OnTime from "../OnTime";
import Delayed from "../Delayed";
import Cancelled from "../Cancelled";

function App() {
	// const { flightStatus = [], currentStatus, setCurrentStatus } = props;

	const [flightStatus] = useState([
		{ name: "Find My Plane", component: [Home] },
		{ name: "On Time", component: [OnTime] },
		{ name: "Delayed", component: [Delayed] },
		{ name: "Cancelled", component: [Cancelled] },
	]);

	const [currentStatus, setCurrentStatus] = useState(flightStatus[0]);

	return (
		<main className="App-body">
			<h1>{currentStatus.name}</h1>
			<Home
				flightStatus={flightStatus}
				currentStatus={currentStatus}
				setCurrentStatus={setCurrentStatus}
			/>
		</main>
	);
}

export default App;
