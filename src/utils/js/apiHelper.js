// take input and search flight
export function searchFlights(searchInput) {
	// if search input === 6 split airlineIata and flihgtNumber to place
	// if(searchInput.length === 6){
	//     searchInput.split
	// }
	// else if input === 4 don't add airlineIata

	console.log(searchInput);

	// hardcoded query
	let flightNumber = 3628;
	let airlineIata = "af";
	// get api url and key
	let apiKey = process.env.REACT_APP_FLIGHT_API_KEY;
	let apiUrl =
		"https://app.goflightlabs.com/flights?access_key=" +
		apiKey +
		"&flight_number=" +
		flightNumber +
		"&airline_iata=" +
		airlineIata;

	// fetch api with hardcoded query
	fetch(apiUrl).then(function (response) {
		// then console log the data
		response.json().then(function (data) {
			console.log(data);
		});
	});

	// get github user
	var getUserRepos = function (user) {
		// console.log(fetch(apiUrl + apiKey + "&flight_number=1234"));
		let apiUrl2 = "https://api.github.com/users/" + user + "/repos";
		fetch(apiUrl2).then(function (response) {
			response.json().then(function (data) {
				console.log(data);
			});
		});
	};
	getUserRepos(searchInput);
}

export function searchFlightNumber(searchInput) {
	// hardcoded query
	let flightNumber = 3628;
	// get api url and key
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

// control flow depending on null input, delayed, on time, or cancelled
export function inputValidation(userInput) {
	// if user submits nothing repeat with alert (or popup)
	if (userInput === null) {
		console.log("no input");
	} else if (userInput.length !== 6) {
		console.log("incorrect length");
		// if 4 numbers send through search with all flight numbers
		if (userInput.length === 4) {
			// make the searchFlightNumber
			searchFlightNumber(userInput);
		} else {
			console.log("incorrect Length");
		}
	} else {
		// if 6 set through regex to make sure first two char are letters and last 4 are numbers
		searchFlights(userInput);
	}
}
