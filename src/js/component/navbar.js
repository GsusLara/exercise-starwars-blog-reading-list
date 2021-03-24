import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/starwars.png";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar">
			<img id="logo" src={logo} />
			<div className="dropdown">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ background: "white" }}>
					<li>
						<a className="dropdown-item" href="#">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Another action
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
