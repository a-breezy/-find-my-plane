import React, { useEffect } from "react";

function SearchBar(props) {
	const { flightStatus = [], setStatus, status } = props;

	useEffect(() => {
		document.title = status.name;
	}, [status]);

	function handleClick(e) {
		e.preventDefault();
		let updatedStatus = status;
		updatedStatus = flightStatus[1];
		setStatus(updatedStatus);
	}

	return (
		<div>
			<div className="flight-search">
				<input type="text" placeholder="Enter Flight Number" />
				<button type="button">enter</button>
			</div>
			<div>
				{flightStatus.map((status) => (
					// if(status !== status[0]){
					<button type="button" onClick={handleClick} key={status.name}>
						{status.name}
					</button>
				))}
			</div>
		</div>
	);
}

export default SearchBar;
