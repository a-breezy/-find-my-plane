import React from "react";
import "./App.css";

import Layout from "./components/Layout";
// import Home from "./components/Home";
// import OnTime from "./components/OnTime";
// import Delayed from "./components/Delayed";
// import Cancelled from "./components/Cancelled";

function App() {
	// const [flightStatus] = useState([
	// 	{ name: "Find My Plane", component: [Home] },
	// 	{ name: "On Time", component: [OnTime] },
	// 	{ name: "Delayed", component: [Delayed] },
	// 	{ name: "Cancelled", component: [Cancelled] },
	// ]);

	// const [currentStatus, setCurrentStatus] = useState(flightStatus[0]);
	return (
		<div className="App">
			{/* <header></header> */}

			{/* trying to figure out whether I need to pass props down from app.js or layout.js */}
			<Layout
			// flightStatus={flightStatus}
			// currentStatus={currentStatus}
			// setCurrentStatus={setCurrentStatus}
			/>
			{/* <footer></footer> */}
		</div>
	);
}

export default App;
