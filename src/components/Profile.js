import React, { useState } from "react";

const Profile = (props) => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h2>Profile Page</h2>
			<h3>Name: {props.name}</h3>
			<h4>Count-Function: {count}</h4>
			<button onClick={() => setCount(1)}>Count</button>
		</div>
	);
};

export default Profile;
