import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import p2 from "../../img/Sullust.png";

export function CardPlanets(props) {
	CardPlanets.propTypes = {
		name: PropTypes.string,
		info: PropTypes.string
	};

	return (
		<div className="col-5">
			<div className="card card-block card-1">
				<img src={p2} className="rounded float-start" />
				<div id="description" className="w-50 h-75  p-2 text-justify">
					<h3>{props.name}</h3>
					<p className="text-break">{props.info}</p>
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
	);
}
