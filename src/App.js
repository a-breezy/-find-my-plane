import React, { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import Status from "./components/Status";

function App() {
	const [flightStatus] = useState([
		{ name: "Find My Plane", component: [<SearchBar />] },
		{ name: "Status", component: [<Status />] },
	]);

	const [currentStatus, setCurrentStatus] = useState(flightStatus[0]);

	return (
		<div className="App">
			<main className="App-body">
				<h1>{currentStatus.name}</h1>
				{/* create logic for searchbar or when button pressed
					ontime, delayed, or cancelled	
				*/}
				<SearchBar />
			</main>
		</div>
	);
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
	/* change out:
	- app should have the layout.js (get rid of layout.js)
	- Delayed, ontime and cancelled should all be broken down
		- title happens in app.js
		- flight status happens in a new Component
		- buttons happen in their own Component
			- buttons should be mapped over with category to give key
	- everything should happen dynamically and simply with state change
*/
}
