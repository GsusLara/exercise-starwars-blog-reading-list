const getState = ({ getStore, getActions, setStore }) => {
	let temporal = [];
	return {
		store: {
			planets: [],
			people: [],
			favorites: []
		},
		actions: {
			planetas: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result.results });
					})
					.catch();
			},

			personajes: () => {
				fetch("https://akabab.github.io/starwars-api/api/all.json", {
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
						alert("ya está en tus favoritos");
					}
				}
				if (orden === "del") {
					temporal = temporal.filter(word => word !== nombre);
				}
				setStore({ favorites: temporal });
			}
		}
	};
};

export default getState;
