import "./App.css";

import Home from "./components/Home";
import OnTime from "./components/OnTime";
import Delayed from "./components/Delayed";
import Cancelled from "./components/Cancelled";

function App() {
	let flightStatus = null;

	return (
		<div className="App">
			{/* <header></header> */}
			{/* <Home /> */}
			{/* <OnTime /> */}
			<Delayed />
			{/* <Cancelled /> */}
			{/* <footer></footer> */}
		</div>
	);
}

export default App;
