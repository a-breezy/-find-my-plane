import React, { useEffect } from "react";
import { searchFlights, inputValidation } from "../../utils/js/apiHelper";

function SearchBar(props) {
	const { flightStatus = [], setStatus, status } = props;

	useEffect(() => {
		document.title = status.name;
	}, [status]);

	function handleClick(e) {
		e.preventDefault();
		inputValidation();
		console.log("click");
		// let updatedStatus = status;
		// updatedStatus = flightStatus[2];
		// setStatus(updatedStatus);
	}

	return (
		<div>
			<div className="flight-search">
				{/* need to include basic instructions */}
				<label for="flightNumberInput">
					Type Flight Number (either with or without two character IATA code)
				</label>
				<br />
				<input
					type="text"
					if="flightNumberInput"
					placeholder="Enter Flight Number"
				/>
				<button type="submit" onClick={handleClick}>
					Find My Plane
				</button>
				{/* <form onSubmit={handleSubmit}>
				<label>Enter your name:
					<input 
					type="text" 
					value={name}
					onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<input type="submit" />
				</form> */}
			</div>
			{/* making multiple buttons for each search. not necessary
			<div>
				{flightStatus.map((status, i) => (
					// make button not render flightStatus[0]
					<button type="button" onClick={handleClick} key={status.name}>
						<span>{status.name}</span>
					</button>
				))}
			</div> */}
		</div>
	);
}

export default SearchBar;
