import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const Info = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<h1>{store.planetaInfo}</h1>
			<div className="mt-5 w-50 h-25" />
			<Link to="/">
				<button className="btn btn-warning m-2">Back home</button>
			</Link>

			<br />
			<br />
			<br />
		</div>
	);
};
