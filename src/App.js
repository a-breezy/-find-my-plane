import "./App.css";

import Home from "./components/Home";
import OnTime from "./components/OnTime";

function App() {
	let flightStatus = null;

	return (
		<div className="App">
			{/* <header></header> */}
			{/* <Home /> */}
			<OnTime />
			{/* <footer></footer> */}
		</div>
	);
}

export default App;
