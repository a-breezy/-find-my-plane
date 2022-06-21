import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import Status from "./components/Status";

function App() {
	const [flightStatus] = useState([
		{ name: "Find My Plane", component: [] },
		{ name: "On Time", component: [] },
		{ name: "Delayed", component: [] },
		{ name: "Cancelled", component: [] },
	]);
	const [status, setStatus] = useState(flightStatus[0]);

	return (
		<div className="App">
			<main className="App-body">
				<h1>{status.name}</h1>
				{/* create logic for searchbar or when button pressed
					ontime, delayed, or cancelled	
				*/}
				<SearchBar 
					flightStatus = {flightStatus}
					setStatus={setStatus}
					status={status}
				/>
			</main>
		</div>
	);
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
	/* change out:
	- Delayed, ontime and cancelled should all be broken down
		- title haxppens in app.js
		- flight status happens in a new Component
		- buttons happen in their own Component
			- buttons should be mapped over with category to give key
	- everything should happen dynamically and simply with state change
*/
}
