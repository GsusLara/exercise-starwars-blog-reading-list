import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function CardPlanets(props) {
	const { store, actions } = useContext(Context);
	CardPlanets.propTypes = {
		name: PropTypes.string,
		info: PropTypes.string,
		tamaño: PropTypes.string,
		poblacion: PropTypes.string,
		id: PropTypes.string,
		img: PropTypes.string
	};

	return (
		<div className="col-5">
			<div className="card card-block card-1">
				<img src={props.img} className="rounded float-start" />
				<div id="description" className="w-50 h-75  p-2 text-justify">
					<h3>{props.name}</h3>
					<ul className="list-group mt-3">
						<li className="list-group-item" style={{ background: "transparent" }}>
							Diameter:
							{" " + props.tamaño}
						</li>
						<li className="list-group-item" style={{ background: "transparent" }}>
							Population:
							{" " + props.poblacion}
						</li>
					</ul>
				</div>
				<div id="botones" className="w-50">
					<Link to="/detailP">
						<button
							type="button"
							className="btn  btn-warning m-2"
							onClick={() => actions.detalleP(props.id)}>
							More info..
						</button>
					</Link>
					<button
						type="button"
						className="btn  btn-warning m-2"
						style={{ display: store.vista ? "none" : "inline" }}
						onClick={() => actions.favoritos("add", props.name)}>
						Add to favorites
					</button>
				</div>
			</div>
		</div>
	);
}
