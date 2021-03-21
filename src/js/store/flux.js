import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
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
					.then(result => console.log(result.results));
			},

			personajes: () => {
				fetch("https://akabab.github.io/starwars-api/api/all.json", {
					method: "GET"
				})
					.then(response => response.json())
					.then(result => console.log(result));
			}
		}
	};
};

export default getState;
