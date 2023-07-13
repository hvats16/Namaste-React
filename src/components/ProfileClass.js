import React from "react";

class ProfileClass extends React.Component {
	constructor(props) {
		super(props);
		//Create State here
		this.state = {
			userInfo: {
				name: "Dummy Name",
				location: "Dummy Location",
			},
		};
	}
	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/hvats16");
		const json = await data.json();
		console.log(data);
		this.setState({
			userInfo: json,
		});
	}

	componentDidUpdate() {}
	componentWillUnmount() {
		console.log("Component UnMounted");
	}
	render() {
		return (
			<div>
				<h1>Profile Class Component</h1>
				<img src={this.state?.userInfo?.avatar_url} alt="" />
				<h2>Name: {this.state?.userInfo?.name}</h2>
				<h3>Location: {this.state?.userInfo?.location}</h3>
			</div>
		);
	}
}

export default ProfileClass;
