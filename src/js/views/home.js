import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardPerson } from "../component/cardPerson";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center">
			<br />
			<div className="container-fluid mt-5">
				<h1>Characters</h1>
				<br />
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-4 pt-2">
					{store.people.map((item, index) => {
						return (
							<CardPerson
								key={index}
								name={item.name}
								img={item.image}
								sexo={item.gender}
								origen={item.homeworld}
								id={index}
							/>
						);
					})}
				</div>
			</div>
			<br />
			<br />
			<div className="container-fluid mt-5">
				<h1 className="mt-2">Planets</h1>
				<br />
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-4 pt-2">
					{store.planets.map((item, index) => {
						return (
							<CardPlanets
								key={index}
								name={item.name}
								tamaño={item.diameter}
								poblacion={item.population}
								id={index}
								img={item.image}
							/>
						);
					})}
				</div>
			</div>
			<br />
			<br />
		</div>
	);
};
