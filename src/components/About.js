import React from "react";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>This is the About Page</h1>
				<ProfileClass name={"Child 1"} />
			</div>
		);
	}
}

export default About;
