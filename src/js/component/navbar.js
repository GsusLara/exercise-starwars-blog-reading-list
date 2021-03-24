import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/starwars.png";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar">
			<img id="logo" src={logo} />

			<div className="dropdown" style={{ marginRight: "7rem" }}>
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favorites.map((item, index) => {
						return (
							<li key={index} className="dropdown-item" href="#">
								{item}
								<i
									className="fas fa-trash-alt float-right"
									onClick={() => actions.favoritos("del", item)}
								/>
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
