import React, { useState } from "react";
import { restrautList } from "../config";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
	const [searchInput, setSearchInput] = useState("");
	const [resturants, setResturants] = useState(restrautList);

	function filterData(searchInput, resturants) {
		const filterData = resturants.filter((resturant) => {
			return resturant.data.name.includes(searchInput);
		});
		return filterData;
	}
	return (
		<>
			<div className="search-container">
				<input
					type="text"
					name=""
					placeholder="Search"
					className="search-input"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button
					className="search-btn"
					onClick={() => {
						const data = filterData(searchInput, resturants);
						setResturants(data);
					}}>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{resturants.map((restaurant) => {
					return (
						<RestrauntCard {...restaurant.data} key={restaurant.data.id} />
					);
				})}
			</div>
		</>
	);
};

export default Body;
