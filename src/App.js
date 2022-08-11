import React, { useState, useEffect } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import Status from "./components/Status";

function App() {
	const [flightStatus] = useState([
		{ name: "Find My Plane" },
		{ name: "On Time" },
		{ name: "Delayed" },
		{ name: "Cancelled" },
	]);
	const [status, setStatus] = useState(flightStatus[0]);
	const [search, setSearch] = useState(false);

	useEffect(() => {
		document.title = status.name;
	}, [status]);

	return (
		<div className="App">
			<main className="App-body">
				<h1>{status.name}</h1>

				{/* conditionally render status if serachbar finds flight */}
				{search ? (
					<>
						<SearchBar
							flightStatus={flightStatus}
							setStatus={setStatus}
							status={status}
							search={search}
							setSearch={setSearch}
						/>
						<br />
						<Status />
					</>
				) : (
					<>
						<SearchBar
							flightStatus={flightStatus}
							setStatus={setStatus}
							status={status}
							search={search}
							setSearch={setSearch}
						/>
					</>
				)}
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
