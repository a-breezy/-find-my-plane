import axios from "axios";

export function searchFlight(iata, flight) {
	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
	// dynamic query
	// let flightNumber = flight;
	// let airlineIata = iata;

	console.log(apiKey);
	console.log(iata, flight);

	// hardcoded query
	let flightNumber = 3628;
	let airlineIata = "af";

	let apiUrl =
		"/flights?access_key=" +
		apiKey +
		"&flight_number=" +
		flightNumber +
		"&airline_iata=" +
		airlineIata;

	// try with axios to allow cors
	axios({
		method: "get",
		url: apiUrl,
	})
		.then(function (res) {
			console.log(res);
		})
		.catch(function (res) {
			console.log(res);
		});
}

export function searchFlightNumber(flight) {
	// hardcoded query
	let flightNumber = 3628;
	// dynamic query
	// let flightNumber = flight;
	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
	let apiUrl =
		"/flights?access_key=" + apiKey + "&flight_number=" + flightNumber;

	// try with axios to allow cors
	axios({
		method: "get",
		url: apiUrl,
	})
		.then(function (res) {
			console.log(res);
		})
		.catch(function (res) {
			console.log(res);
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
