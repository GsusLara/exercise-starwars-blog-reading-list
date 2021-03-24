import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function CardPerson(props) {
	CardPerson.propTypes = {
		name: PropTypes.string,
		sexo: PropTypes.string,
		origen: PropTypes.node,
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
							Gender:
							{" " + props.sexo}
						</li>
						<li className="list-group-item" style={{ background: "transparent" }}>
							Home World:
							{" " + props.origen}
						</li>
					</ul>
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
