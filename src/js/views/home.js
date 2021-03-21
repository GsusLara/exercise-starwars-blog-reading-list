import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardPerson } from "../component/cardPerson";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => (
	<div className="text-center">
		<br />
		<div className="container-fluid mt-5">
			<h1>Characters</h1>
			<br />
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-4 pt-2">
				<CardPerson name="jesus" />
				<CardPerson name="andres" />
				<CardPerson name="olger" />
				<CardPerson name="daniel" />
				<CardPerson name="margot" />
			</div>
		</div>
		<br />
		<br />
		<div className="container-fluid mt-5">
			<h1 className="mt-2">Planets</h1>
			<br />
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-4 pt-2">
				<CardPlanets name="tierra" />
			</div>
		</div>
		<br />
		<br />
	</div>
);
