import React, { useEffect, useState } from "react";
import {
	searchFlight,
	searchFlightNumber,
	validateSixChar,
	validateFourChar,
} from "../../utils/js/searchFlightFunctions";

function SearchBar(props) {
	// prop passes down status of flight
	// const { flightStatus = [], setStatus, status } = props;

	const [errorMessage, setErrorMessage] = useState("");
	const [formState, setFormState] = useState({ flightNumberInput: "" });
	const { flightNumberInput } = formState;

	let iata = "",
		flight = "";

	// useEffect(() => {
	// 	document.title = status.name;
	// }, [status]);


	// once logic is figured move to searchFlightFunctions.js
	function handleChange(e) {
		const flightNumber = e.target.value;
		
		function checkValue (flightNumber) {
			if (flightNumber.length === 4 && validateFourChar(flightNumber)) {
				console.log(searchFlightNumber(flightNumber));

				setErrorMessage("");
				return (flight = flightNumber);

			} else if (flightNumber.length === 6 && validateSixChar(flightNumber)) {

				iata = flightNumber.slice(0, 2);
				flight = flightNumber.slice(2, 6);
				console.log(searchFlight(iata, flight));

				setErrorMessage("");
				return [iata, flight];

			} else if (
				!flightNumber.length ||
				!validateFourChar(flightNumber) ||
				!validateSixChar(flightNumber)
			) {
				// console.log("set error message");
				setErrorMessage(
					"Flight number must be four numbers or two letters followed by four numbers."
				);
			}
			console.log("outside else ", [iata, flight]);
			// only update formState if there is no error message
			// if (!errorMessage) {
			// 	setFormState({ ...formState, [e.target.name]: e.target.value });
			// }
			// // if there are extra things to update change flightNUmberInput to {[e.target.name]: e.target.value} --> must also change useState declaration
			// if (errorMessage) {
			// 	console.log("error message: ", errorMessage);
			// }
	
			return [iata, flight];

		}

		checkValue(flightNumber)
	}

	// console.log(iata, flight);

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div>
			<form
				id="flight-search"
				className="flight-search"
				onSubmit={handleSubmit}
			>
				{/* need to include basic instructions */}
				<label htmlFor="flightNumberInput">
					Type Flight Number (either with or without two character IATA code)
					<input
						type="text"
						// id="flightNumberInput"
						name="flightNumberInput"
						placeholder="Enter Flight Number"
						defaultValue={flightNumberInput}
						onBlur={handleChange}
					/>
				</label>
				{/* change the class/font size of this */}
				{errorMessage && (
					<div>
						<p className="error">{errorMessage}</p>
					</div>
				)}
				<button type="submit" onClick={handleSubmit}>
					Find My Plane
				</button>
			</form>
		</div>
	);
}

export default SearchBar;

