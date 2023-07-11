import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
	const params = useParams();
	const { resId } = params;
	const [resturantMenu, setResturantMenu] = useState(null);

	useEffect(() => {
		getRestaurantInfo();
	}, []);

	async function getRestaurantInfo() {
		const data = await fetch(
			`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4785376&lng=77.49080579999999&restaurantId=${resId}&submitAction=ENTER`
		);
		const json = await data.json();
		setResturantMenu(json?.data?.cards[0]?.card?.card?.info);
	}

	return !resturantMenu ? (
		<Shimmer />
	) : (
		<div>
			<h1>Resturant id : {resId}</h1>
			<h2>{resturantMenu?.name}</h2>
			<img src={IMG_CDN_URL + resturantMenu?.cloudinaryImageId} />
			<h3>{resturantMenu?.areaName}</h3>
			<h3>{resturantMenu?.city}</h3>
			<h3>{resturantMenu?.avgRating}</h3>
			<h3>{resturantMenu?.costForTwoMessage}</h3>
		</div>
	);
};

export default RestrauntMenu;
