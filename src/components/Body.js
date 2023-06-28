import React, { useState, useEffect } from "react";
import { restrautList } from "../config";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

function filterData(searchInput, resturants) {
	const filterData = resturants.filter((resturant) => {
		return resturant?.data?.name
			?.toLowerCase()
			?.includes(searchInput.toLowerCase());
	});
	return filterData;
}

const Body = () => {
	const [searchInput, setSearchInput] = useState("");
	const [filteredResturants, setFilteredResturants] = useState([]);
	const [allResturants, setAllResturants] = useState([]);

	useEffect(() => {
		//Api call
		getResturants();
	}, []);

	async function getResturants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4785376&lng=77.49080579999999&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		//Optional Chaining
		setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
	}

	// Not Rendering Component (Early Return)
	if (!allResturants) return null;

	return allResturants.length === 0 ? (
		<Shimmer />
	) : (
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
						const data = filterData(searchInput, allResturants);
						setFilteredResturants(data);
					}}>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{filteredResturants?.length === 0 ? (
					<h1>No Resturant match your Filter!!</h1>
				) : (
					filteredResturants.map((restaurant) => {
						return (
							<RestrauntCard {...restaurant.data} key={restaurant.data.id} />
						);
					})
				)}
			</div>
		</>
	);
};

export default Body;
