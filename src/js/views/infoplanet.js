import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const InfoPlanet = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center ">
			<h1>{store.planets[store.mundillo].name}</h1>

			<div className="container">
				<div className="row">
					<div className="col-sm">
						<br />
						<br />
						<li className="list-group-item bg-transparent">
							Diameter:
							{store.planets[store.mundillo].diameter}
						</li>
						<li className="list-group-item bg-transparent">
							Rotation Period:
							{store.planets[store.mundillo].rotation_period}
						</li>
						<li className="list-group-item bg-transparent">
							Orbital Period:
							{store.planets[store.mundillo].orbital_period}
						</li>
						<li className="list-group-item bg-transparent">
							Surface Water:
							{store.planets[store.mundillo].surface_water}
						</li>
					</div>
					<div className="col-sm">
						<img src={store.planets[store.mundillo].image} style={{ height: "20rem" }} />
					</div>
					<div className="col-sm">
						<br />
						<br />
						<li className="list-group-item bg-transparent">
							Gravity:
							{store.planets[store.mundillo].gravity}
						</li>
						<li className="list-group-item bg-transparent">
							Terrain:
							{store.planets[store.mundillo].terrain}
						</li>
						<li className="list-group-item bg-transparent">
							Climate:
							{store.planets[store.mundillo].climate}
						</li>
						<li className="list-group-item bg-transparent">
							Population:
							{store.planets[store.mundillo].population}
						</li>
					</div>
				</div>
			</div>
			<br />
			<div className=" w-50 h-25" />
			<Link to="/">
				<button className="btn btn-warning m-2">Back home</button>
			</Link>
			<button
				type="button"
				className="btn  btn-warning m-2"
				style={{ display: store.vista ? "none" : "inline" }}
				onClick={() => actions.favoritos("add", store.planets[store.mundillo].name)}>
				Add to favorites
			</button>
		</div>
	);
};
