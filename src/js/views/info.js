import React from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";

export const Info = () => {
	return (
		<div className="text-center mt-5">
			<div className="mt-5 w-50 h-25" />
			<Link to="/">
				<button className="btn btn-warning m-2">Back home</button>
			</Link>
			<button type="button" className="btn  btn-warning m-2">
				Add to favorites
			</button>
			<br />
			<br />
			<br />
		</div>
	);
};
