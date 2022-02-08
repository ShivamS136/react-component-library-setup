import React, { useState } from "react";

import "./App.scss";
import { TextInput } from "../lib/index";

function App() {
	const [name, setName] = useState("");
	return (
		<div>
			<div className="App">Learn with React</div>
			<br />
			<TextInput
				label={"Name"}
				value={name}
				onChange={(val) => {
					setName(val);
				}}
			/>
		</div>
	);
}

export default App;
