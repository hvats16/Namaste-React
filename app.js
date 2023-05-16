import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
	"h1",
	{
		id: "heading1",
		key: "h1",
	},
	"Heading 2"
);

const Heading = <h1>Hello World!</h1>;

console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);
