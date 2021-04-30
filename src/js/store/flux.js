const getState = ({ getStore, getActions, setStore }) => {
	let temporal = [];
	return {
		store: {
			planets: [],
			people: [],
			favorites: [],
			personaje: "",
			mundillo: "",
			vista: true
		},
		actions: {
			planetas: () => {
				// fetch("https://swapi.dev/api/planets/", {
				fetch("https://3000-blush-hamster-zzzfm1i8.ws-us04.gitpod.io/planets", {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(result => {
						// setStore({ planets: result.results });
						setStore({ planets: result });
					})
					.catch();
			},

			personajes: () => {
				// fetch("https://akabab.github.io/starwars-api/api/all.json", {
				fetch("https://3000-blush-hamster-zzzfm1i8.ws-us04.gitpod.io/characters", {
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
			usuarios: (username, password) => {
				fetch("https://3000-blush-hamster-zzzfm1i8.ws-us03.gitpod.io/characters", {
					method: "POST",
					body: JSON.stringify({
						email: username,
						password: password
					}),
					headers: { "Content-Type": "application/json" }
				}).then(respuesta => {
					if (respuesta.status >= 200 && respuesta.status < 300) {
						alert("inicio correcto");
					}
				});
			},
			cambio: condicion => {
				setStore({ vista: condicion });
			}
		}
	};
};

export default getState;
