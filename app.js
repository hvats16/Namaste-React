import React from "react";
import ReactDOM from "react-dom/client";

const Heading = (
	<>
		<h1>Hello World!</h1>
		<h2>Hello h2</h2>
	</>
);

const HeaderComponent1 = () => {
	return (
		<>
			<h1>Header1</h1>
		</>
	);
};

const HeaderComponent2 = () => (
	<>
		{Heading}
		{/* {HeaderComponent1()} */}
		<HeaderComponent1 />
		<h1>Header2</h1>
	</>
);
console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent2 />);
