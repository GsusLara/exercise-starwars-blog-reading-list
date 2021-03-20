import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import p1 from "../../img/chow.jpg";
import p2 from "../../img/Sullust.png";

export const Home = () => (
	<div className="text-center">
		<div className="container-fluid">
			<h1>Characters</h1>
			<div className="scrolling-wrapper row flex-row flex-nowrap mt-1 pb-4 pt-2">
				<div className="col-5">
					<div className="card card-block card-1">
						<img src={p1} className="rounded float-start" />
						<div id="description" className="w-50 h-75  p-2 text-justify">
							<h3>Chewbacca</h3>
							<p className="text-break">
								Es un wookiee, un bípedo alto, peludo y robusto, especie inteligente del planeta
								Kashyyyk. Chewbacca es el leal amigo y socio de Han Solo, y sirve como copiloto en la
								nave espacial de Solo, el Halcón Milenario.
							</p>
						</div>
						<div id="botones" className="w-50">
							<button type="button" className="btn  btn-warning m-2">
								More info..
							</button>
							<button type="button" className="btn  btn-warning m-2">
								Add to favorites
							</button>
						</div>
					</div>
				</div>

				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
			</div>
		</div>

		<div className="container-fluid">
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
							<button type="button" className="btn  btn-warning m-2">
								More info..
							</button>
							<button type="button" className="btn  btn-warning m-2">
								Add to favorites
							</button>
						</div>
					</div>
				</div>

				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
				<div className="col-5">
					<div className="card card-block card-1" />
				</div>
			</div>
		</div>
	</div>
);
