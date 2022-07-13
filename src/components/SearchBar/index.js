import React, { useEffect, useState } from "react";
import {
	searchFlights,
	inputValidation,
	validateSixChar,
	validateFourChar,
} from "../../utils/js/apiHelper";

function SearchBar(props) {
	const { flightStatus = [], setStatus, status } = props;
	const [errorMessage, setErrorMessage] = useState("");
	const [formState, setFormState] = useState({ flightNumberInput: "" });
	const { flightNumberInput } = formState;

	useEffect(() => {
		document.title = status.name;
	}, [status]);

	function handleChange(e) {
		// create a validation response to check flightnumber is valid (see apiHelper)
		if (e.target.name === "flightNumberInput") {
			if (e.target.value.length === 4 && validateFourChar(e.target.value)) {
				console.log("Correct flight Input 4 char");
			} else if (
				e.target.value.length === 6 &&
				validateSixChar(e.target.value)
			) {
				console.log("Correct Flight Input 6 char");
			} else {
				console.log("Error");
			}

			// if (!isValid) {
			// 	setErrorMessage("Your flight number is invalid");
			// } else {
			// 	setErrorMessage("");
			// }
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
		// if there are extra things to update change flightNUmberInput to {[e.target.name]: e.target.value} --> must also change useState declaration
		console.log("error message: ", errorMessage);
	}

	function handleSubmit(e) {
		e.preventDefault();
		// inputValidation(e);
		console.log(e);
		console.log(formState);

		// notes on updating api state
		// let updatedStatus = status;
		// updatedStatus = flightStatus[2];
		// setStatus(updatedStatus);
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
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Find My Plane</button>
			</form>
		</div>
	);
}

export default SearchBar;
