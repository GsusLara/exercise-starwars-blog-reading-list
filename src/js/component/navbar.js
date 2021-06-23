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
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
	}
	const validarUser = (user, password) => {
		actions.validate(user, password);
		setTimeout(() => desicion(), 2000);
	};

	const desicion = () => {
		if (store.aprovacion === true) {
			entrar(false);
		} else {
			setEmail("");
			setPassword("");
		}
	};
	const entrar = dato => {
		actions.getfavoritos();
		actions.cambio(dato);
		handleClose();
		setEmail("");
		setPassword("");
	};

	const salir = () => {
		actions.salida(store.favorites);
		entrar(true);
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
						log in
					</Button>

					<Modal className="modalNav" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
						<Modal.Header className="part">
							<Modal.Title>Welcome!</Modal.Title>
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
										onKeyPress={e => {
											if (e.key == "Enter") {
												if (email && password !== "") {
													handleClose();
													validarUser(email, password);
												} else {
													alert("set user and password");
												}
											}
										}}
									/>
								</Form.Group>
								<Form.Group size="lg" controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										value={password}
										onChange={e => setPassword(e.target.value)}
										onKeyPress={e => {
											if (e.key == "Enter") {
												if (email && password !== "") {
													handleClose();
													validarUser(email, password);
												} else {
													alert("set user and password");
												}
											}
										}}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer className="part">
							<Button variant="btn-warning" className="btn-warning" onClick={handleClose}>
								Close
							</Button>
							<Button
								variant="btn-warning"
								className="btn-warning"
								type="submit"
								disabled={!validateForm()}
								onClick={() => validarUser(email, password)}>
								Get in
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
					onClick={() => salir()}>
					log out
				</button>
			</div>
		</nav>
	);
};
