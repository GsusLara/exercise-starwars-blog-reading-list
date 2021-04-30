import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/starwars.png";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";
export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// const [vista, setVista] = useState(true);

	const entrar = dato => {
		actions.cambio(dato);
		handleClose();
	};

	return (
		<nav className="navbar">
			<img id="logo" src={logo} />
			<div className="mr-1 d-flex">
				<>
					<Button
						variant="btn-warning"
						onClick={handleShow}
						className="mr-5 btn-warning"
						style={{ display: store.vista ? "block" : "none" }}>
						Iniciar Sesion
					</Button>

					<Modal className="modalNav" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
						<Modal.Header closeButton className="part">
							<Modal.Title>Bienvenido!</Modal.Title>
						</Modal.Header>
						<Modal.Body className="part" />
						<Modal.Footer className="part">
							<Button variant="btn-warning" className="btn-warning" onClick={handleClose}>
								Close
							</Button>
							<Button variant="btn-warning" className="btn-warning" onClick={() => entrar(false)}>
								Entrar
							</Button>
						</Modal.Footer>
					</Modal>
				</>

				<div className="dropdown mr-5" style={{ display: store.vista ? "none" : "flex" }}>
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
				<button
					type="button"
					className=" btn btn-secondary "
					style={{ display: store.vista ? "none" : "flex" }}
					onClick={() => entrar(true)}>
					Cerrar Sesión
				</button>
			</div>
		</nav>
	);
};
