import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import logo from "../../img/starwars.png";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [login, setlogin] = useState(false);
	const [register, setregister] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordvalide, setPasswordvalide] = useState("");
	const loginClose = () => setlogin(false);
	const loginShow = () => setlogin(true);
	const registerClose = () => setregister(false);
	const registerShow = () => setregister(true);
	const revisionEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const guardarUsuario = (email, password, passwordvalide) => {
		if (email && password && passwordvalide == "") {
			alert("set User name and password");
		} else if (revisionEmail.test(email) !== true) {
			alert("email invalid");
		} else if (password !== passwordvalide) {
			alert("Passwords do not match");
		} else if (password.length < 8) {
			alert("the password must have more than 8 characters");
		} else {
			actions.addUser(email, password);
			registerClose();
		}
	};
	const validateForm = () => {
		return email.length > 0 && password.length > 0;
	};
	const handleSubmit = event => {
		event.preventDefault();
	};
	const validarUser = (user, password) => {
		if (email && password !== "") {
			actions.validate(user, password);
			setTimeout(() => desicion(), 2000);
		} else {
			alert("set user and password");
		}
	};
	const desicion = () => {
		if (store.aprovacion === true) {
			entrar(false);
			loginClose();
		} else {
			setEmail("");
			setPassword("");
		}
	};
	const entrar = dato => {
		actions.getfavoritos();
		actions.cambio(dato);
		loginClose();
		setEmail("");
		setPassword("");
	};
	const salir = () => {
		actions.salida(store.favorites);
		entrar(true);
	};
	return (
		<nav className="navbar navbar-light">
			<div className="navbar-brand">
				<img className="logo" src={logo} />
			</div>
			<div className="my-0">
				<>
					<Button
						variant="btn-warning"
						onClick={() => loginShow()}
						className="m-2 btn-warning"
						style={{ display: store.vista ? "inline" : "none" }}>
						log in
					</Button>

					<Modal className="modalNav" show={login} onHide={loginClose} backdrop="static" keyboard={false}>
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
										autoComplete="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										onKeyPress={e => {
											if (e.key == "Enter") {
												validarUser(email, password);
											}
										}}
									/>
								</Form.Group>
								<Form.Group size="lg" controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										autoComplete="password"
										value={password}
										onChange={e => setPassword(e.target.value)}
										onKeyPress={e => {
											if (e.key == "Enter") {
												validarUser(email, password);
											}
										}}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer className="part">
							<Button variant="btn-warning" className="btn-warning" onClick={loginClose}>
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
				<>
					<Button
						variant="btn-warning"
						onClick={() => registerShow()}
						className="m-2 btn-warning"
						style={{ display: store.vista ? "inline" : "none" }}>
						Register
					</Button>

					<Modal
						className="modalNav"
						show={register}
						onHide={registerClose}
						backdrop="static"
						keyboard={false}>
						<Modal.Header className="part">
							<Modal.Title>Register now!</Modal.Title>
						</Modal.Header>
						<Modal.Body className="part">
							<Form className="mt-3">
								<Form.Group size="lg" controlId="email">
									<Form.Label>Email</Form.Label>
									<Form.Control
										autoFocus
										type="email"
										autoComplete="email"
										value={email}
										onChange={i => setEmail(i.target.value)}
										onKeyPress={i => {
											if (i.key == "Enter") {
												guardarUsuario(email, password, passwordvalide);
											}
										}}
									/>
								</Form.Group>
								<Form.Group size="lg" controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										value={password}
										autoComplete="password"
										onChange={i => setPassword(i.target.value)}
										onKeyPress={i => {
											if (i.key == "Enter") {
												guardarUsuario(email, password, passwordvalide);
											}
										}}
									/>
								</Form.Group>
								<Form.Group size="lg" controlId="confirmPassword">
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type="password"
										autoComplete="password"
										value={passwordvalide}
										onChange={i => setPasswordvalide(i.target.value)}
										onKeyPress={i => {
											if (i.key == "Enter") {
												guardarUsuario(email, password, passwordvalide);
											}
										}}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>
						<Modal.Footer className="part">
							<Button variant="btn-warning" className="btn-warning" onClick={() => registerClose()}>
								Close
							</Button>
							<Button
								variant="btn-warning"
								className="btn-warning"
								type="submit"
								onClick={() => guardarUsuario(email, password, passwordvalide)}>
								Save
							</Button>
						</Modal.Footer>
					</Modal>
				</>

				<div className="dropdown m-2" style={{ display: store.vista ? "none" : "inline" }}>
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
					className=" btn btn-secondary m-2"
					style={{ display: store.vista ? "none" : "inline" }}
					onClick={() => salir()}>
					log out
				</button>
			</div>
		</nav>
	);
};
