export function searchFlight(iata, flight) {
	console.log(iata, flight);

	// hardcoded query
	let flightNumber = 3628;
	let airlineIata = "af";
	// dynamic query
	// let flightNumber = flight;
	// let airlineIata = iata;

	// get api url and key
	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
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
	// get api url and key
	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
	let apiUrl =
		"https://app.goflightlabs.com/flights?access_key=" +
		apiKey +
		"&flight_number=" +
		flightNumber;
	console.log(apiUrl);
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
