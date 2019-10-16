import React, { useState, useEffect } from "react";
import "./App.css";

let list = {name: "Darrin", location: "KC"};

const Team = data => {
	const { name, location } = data;
	console.log(name, location);
}

function App() {
	const [member, setMember] = useState(list)

	return (
		<div className="App">
		</div>
	);
}

export default App;
