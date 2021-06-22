const getState = ({ getStore, getActions, setStore }) => {
	let temporal = [];
	return {
		store: {
			// id: "",
			// token: "",
			aprovacion: false,
			planets: [],
			people: [],
			favorites: [],
			personaje: "",
			mundillo: "",
			vista: true
		},
		actions: {
			validate: (user, password) => {
				fetch(process.env.BACKEND_URL + "/login", {
					method: "POST",
					body: JSON.stringify({
						email: user,
						password: password
					}),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							return response.json();
						} else if (response.status >= 400 && response.status < 500) {
							alert("User or password invalid");
						} else {
							alert("Server error " + response.status);
						}
					})
					.then(result => {
						if (result != undefined) {
							sessionStorage.setItem("token", result.token);
							setStore({ aprovacion: true });
						}
					})
					.catch();
			},
			planetas: () => {
				fetch(process.env.BACKEND_URL + "/planets", {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result });
					})
					.catch();
			},

			personajes: () => {
				fetch(process.env.BACKEND_URL + "/characters", {
					method: "GET"
				})
					.then(response => response.json())
					.then(result => {
						setStore({ people: result });
					})
					.catch();
			},
			favoritos: (orden, nombre) => {
				if (orden === "add") {
					if (temporal.includes(nombre) == false) {
						temporal.push(nombre);
					} else {
						alert("it's already in your favorites");
					}
				}
				if (orden === "del") {
					temporal = temporal.filter(word => word !== nombre);
				}
				setStore({ favorites: temporal });
			},
			detalle: id => {
				setStore({ personaje: id });
			},
			detalleP: id => {
				setStore({ mundillo: id });
			},

			cambio: condicion => {
				setStore({ vista: condicion });
			},
			salida: () => {
				setStore({ aprovacion: false });
			}
		}
	};
};

export default getState;
