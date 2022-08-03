export function searchFlight(iata, flight) {
	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
	// dynamic query
	// let flightNumber = flight;
	// let airlineIata = iata;
	
	console.log(iata, flight);

	// hardcoded query
	let flightNumber = 3628;
	let airlineIata = "af";
	
	let apiUrl =
		"https://app.goflightlabs.com/flights?access_key=" +
		apiKey +
		"&flight_number=" +
		flightNumber +
		"&airline_iata=" +
		airlineIata;

	fetch(apiUrl).then(function (response) {
		// then console log the data
		response.json().then(function (data) {
			console.log(data);
		});
	});
}

export function searchFlightNumber(flight) {
	// hardcoded query
	let flightNumber = 3628;
	// dynamic query
	// let flightNumber = flight;
	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
	let apiUrl =
		"https://app.goflightlabs.com/flights?access_key=" +
		apiKey +
		"&flight_number=" +
		flightNumber;

	// fetch api with hardcoded query
	fetch(apiUrl).then(function (response) {
		// then console log the data
		response.json().then(function (data) {
			console.log(data);
		});
	});
}

// check that flight number is correct
export function validateSixChar(flightNumber) {
	var regex = /((^[a-z]{2})(\d{4}$))/i;
	return regex.test(String(flightNumber));
}

export function validateFourChar(flightNumber) {
	var regex = /(\d{4})/;
	return regex.test(String(flightNumber));
}

// check that input is valid and send fetch data
export function checkValue (flightNumber) {
	if (flightNumber.length === 4 && validateFourChar(flightNumber)) {
		// take away clg 
		console.log(searchFlightNumber(flightNumber));

		setErrorMessage("");
		return (flight = flightNumber);

	} else if (flightNumber.length === 6 && validateSixChar(flightNumber)) {
		iata = flightNumber.slice(0, 2);
		flight = flightNumber.slice(2, 6);

		// take away clg
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
}