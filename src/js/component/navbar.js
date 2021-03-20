import React from "react";
import logo from "../../img/starwars.png";
export const Navbar = () => {
	return (
		<nav className="navbar">
			<img id="logo" src={logo} />
			<div className="ml-auto">
				<button id="btnf" className="btn btn-warning">
					Favorites
				</button>
			</div>
		</nav>
	);
};
