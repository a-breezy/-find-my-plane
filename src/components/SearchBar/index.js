import React, { useEffect } from "react";
import { testApi } from "../../utils/js/apiHelper";

function SearchBar(props) {
	const { flightStatus = [], setStatus, status } = props;

	useEffect(() => {
		document.title = status.name;
	}, [status]);

	function handleClick(e) {
		e.preventDefault();
		testApi();
		console.log(status);
		let updatedStatus = status;
		console.log(updatedStatus);
		updatedStatus = flightStatus[2];
		setStatus(updatedStatus);
	}

	return (
		<div>
			<div className="flight-search">
				<input type="text" placeholder="Enter Flight Number" />
				<button type="button">enter</button>
			</div>
			<div>
				{flightStatus.map((status, i) => (
					// make button not render flightStatus[0]
					<button type="button" onClick={handleClick} key={status.name}>
						<span>{status.name}</span>
					</button>
				))}
			</div>
		</div>
	);
}

export default SearchBar;
