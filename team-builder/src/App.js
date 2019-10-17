import React, { useState, useEffect } from "react";
import "./App.css";

let list = [{name: "Darrin", location: "KC"}];

const Team = props => (
	// console.log("team: ", data);
	// return(data);
	<div>
		{props.allMember.map((memb, index) => (
			<div key={index}>
				{memb.name} ({memb.location})
			</div>
		))}
		{/* {allMember.allMember[0].name} */}
	</div>
);

function App() {
	const [allMember, setMember] = useState(list)
	console.log("allMember ", allMember);
	// debugger;

	return (
		<div className="App">
			<Team allMember={allMember} />
		</div>
	);
}

export default App;
