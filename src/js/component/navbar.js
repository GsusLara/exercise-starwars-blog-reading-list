import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/starwars.png";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ModalTitle from "react-bootstrap/ModalTitle";
export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const [vista, setVista] = useState(true);

	const entrar = dato => {
		actions.cambio(dato);
		handleClose();
		setEmail("");
		setPassword("");
	};
	function validateForm() {
		return email.length > 0 && password.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
	}

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
						<Modal.Header className="part">
							<Modal.Title>Bienvenido!</Modal.Title>
						</Modal.Header>
						<Modal.Body className="part">
							<Form className="mt-3">
								<Form.Group size="lg" controlId="email">
									<Form.Label>Email</Form.Label>
									<Form.Control
										autoFocus
										type="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>
								<Form.Group size="lg" controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer className="part">
							<Button variant="btn-warning" className="btn-warning" onClick={handleClose}>
								Cerrar
							</Button>
							<Button
								variant="btn-warning"
								className="btn-warning"
								type="submit"
								disabled={!validateForm()}
								onClick={() => entrar(false)}>
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
