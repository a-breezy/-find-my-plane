import axios from "axios";

// flightData object
let flightData = {
	airline: "",
	origin: "",
	originTerm: "",
	schedDep: "",
	actualDep: "",
	dest: "",
	destTerm: "",
	schedArr: "",
	actualArr: "",
};

// defining flight constructor
export function searchFlight(iata, flightNumber) {
	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
	let apiUrl =
		"/flights?access_key=" + apiKey + "&flight_number=" + flightNumber;

	axios({
		method: "get",
		url: apiUrl,
	})
		.then((res) => {
			console.log(res);
			return (
				(flightData.airline = res.data[0].airline.name),
				(flightData.origin = res.data[0].departure.airport),
				(flightData.originTerm = res.data[0].departure.terminal),
				(flightData.schedDep = res.data[0].departure.scheduled),
				(flightData.actualDep = res.data[0].departure.actual),
				(flightData.dest = res.data[0].arrival.airport),
				(flightData.destTerm = res.data[0].arrival.terminal),
				(flightData.schedArr = res.data[0].arrival.scheduled),
				(flightData.actualArr = res.data[0].arrival.actual)
			);
		})
		.catch((res) => {
			if(Error){
				console.error(Error)
			}
		});
	console.log(flightData);
}


// export function searchFlight(iata, flight) {
// 	let flightNumber = flight;
// 	let airlineIata = iata;
// 	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;

// 	console.log(iata, flight);

// 	let apiUrl =
// 		"/flights?access_key=" +
// 		apiKey +
// 		"&flight_number=" +
// 		flightNumber +
// 		"&airline_iata=" +
// 		airlineIata;

// 	// try with axios to allow cors
// 	axios({
// 		method: "get",
// 		url: apiUrl,
// 	})
// 		.then((res) => {
// 			let data = res.data[0];
// 			// create new obj with data
// 			console.log(new data());
// 		})
// 		.catch((res) => {
// 			console.log(res);
// 		});
// }

export function searchFlightNumber(flight) {
	let flightNumber = flight;
	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
	let apiUrl =
		"/flights?access_key=" + apiKey + "&flight_number=" + flightNumber;

	// try with axios to allow cors
	axios({
		method: "get",
		url: apiUrl,
	})
		.then((res) => {
			console.log(res);
		})
		.catch((res) => {
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
