import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { card, Card } from "../component/card";
import p2 from "../../img/Sullust.png";

export const Home = () => (
	<div className="text-center">
		<br />
		<div className="container-fluid mt-5">
			<h1>Characters</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-1 pb-4 pt-2">
				<Card />
			</div>
		</div>
		<br />
		<br />
		<div className="container-fluid mt-5">
			<h1 className="mt-2">Planets</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-1 pb-4 pt-2">
				<div className="col-5">
					<div className="card card-block card-1">
						<img src={p2} className="rounded float-start" />
						<div id="description" className="w-50 h-75  p-2 text-justify">
							<h3>Sullust</h3>
							<p className="text-break">
								era el principal planeta del sistema Sullust situado en los Territorios del Borde
								Exterior en la unión de la Ruta Comercial Rimma y el Rastro Silvestri. Era el mundo
								natal de los Sullustanos.
							</p>
						</div>
						<div id="botones" className="w-50">
							<Link to="/detail">
								<button type="button" className="btn  btn-warning m-2">
									More info..
								</button>
							</Link>
							<button type="button" className="btn  btn-warning m-2">
								Add to favorites
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br />
		<br />
	</div>
);
