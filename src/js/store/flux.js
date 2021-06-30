const getState = ({ getStore, getActions, setStore }) => {
	let temporal = [];
	return {
		store: {
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
			salida: datafavorites => {
				let favoritoscarga = datafavorites.toString();
				let myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));
				myHeaders.append("Content-Type", "application/json");

				let raw = JSON.stringify({
					favorites: favoritoscarga
				});

				let requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/user", requestOptions);
				temporal = [];
				setStore({ favorites: [] });
				setStore({ aprovacion: false });
			},
			getfavoritos: () => {
				let myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + sessionStorage.getItem("token"));

				let requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/user", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) return response.json();
					})
					.then(result => {
						let apifavorites = result.favorites;
						temporal = apifavorites.split(",");
						setStore({ favorites: temporal });
					})
					.catch(error => error);
			},
			addUser: (email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL + "/user", requestOptions)
					.then(response => {
						if (response.status >= 200 && response.status < 300) {
							alert("Registered user successfully!");
						} else {
							alert("verify that the user is not registered!");
						}
					})
					.catch(error => error);
			}
		}
	};
};

export default getState;
