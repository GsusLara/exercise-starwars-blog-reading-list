import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Info = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center ">
			<h1>{store.people[store.personaje].name}</h1>

			<div className="container">
				<div className="row">
					<div className="col-sm">
						<br />
						<br />
						<li className="list-group-item bg-transparent">
							Height:
							{store.people[store.personaje].height}
						</li>
						<li className="list-group-item bg-transparent">
							Mass:
							{store.people[store.personaje].mass}
						</li>
						<li className="list-group-item bg-transparent">
							Gender:
							{store.people[store.personaje].gender}
						</li>
						<li className="list-group-item bg-transparent ">
							Home world:
							{store.people[store.personaje].homeworld}
						</li>
					</div>
					<div className="col-sm">
						<img src={store.people[store.personaje].image} style={{ height: "20rem" }} />
					</div>
					<div className="col-sm">
						<br />
						<br />
						<li className="list-group-item bg-transparent">
							Born:
							{store.people[store.personaje].born}
						</li>
						<li className="list-group-item bg-transparent">
							Died:
							{store.people[store.personaje].died}
						</li>
						<li className="list-group-item bg-transparent">
							Species:
							{store.people[store.personaje].species}
						</li>
						<li className="list-group-item bg-transparent ">
							Cybernetics:
							{store.people[store.personaje].cybernetics}
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
				onClick={() => actions.favoritos("add", store.people[store.personaje].name)}>
				Add to favorites
			</button>
		</div>
	);
};
