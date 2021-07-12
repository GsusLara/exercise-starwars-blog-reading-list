import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Carga } from "../component/carga";
import "../../styles/home.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [loading, setloading] = useState(true);

	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		slidesToShow: 3,
		dots: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			}
		]
	};
	useEffect(() => {
		setInterval(() => {
			store.planets.length == 0
				? setInterval(() => {
						setloading(false);
				  }, 18000)
				: setloading(false);
		}, 1000);
	}, []);

	if (loading == true) {
		return <Carga />;
	} else {
		return (
			<div className="cuerpo row mt-3">
				<div className="text-center col-12">
					<h1 className="titles">Characters</h1>
				</div>
				<div className="carouselPersonajes col-10 mx-auto mt-2">
					<div className="carouserlLista">
						<Slider
							customPaging={i => {
								return <div>{"•"}</div>;
							}}
							{...settings}>
							{store.people.map((item, index) => {
								return (
									<div className="container carouserlElemento" key={index}>
										<div className="row ">
											<div className="col-12 col-md-6">
												{store.people[2] != undefined || store.people.length != 0 ? (
													<img src={item.image} alt="personaje" className="img-fluid" />
												) : (
													"loading..."
												)}
												<p>
													{store.people[2] != undefined || store.people.length != 0
														? item.name
														: "loading..."}
												</p>
											</div>
											<div className="col-12 col-md-6">
												<ul className="list-group ">
													<li
														className="list-group-item"
														style={{ background: "transparent" }}>
														Gender:
														{" " + item.gender}
													</li>
													<li
														className="list-group-item"
														style={{ background: "transparent" }}>
														Home World:
														{" " + item.homeworld}
													</li>
												</ul>
												<Link to="/detail">
													<button
														type="button"
														className="btn  btn-warning "
														onClick={() => actions.detalle(index)}>
														More info..
													</button>
												</Link>
												<button
													type="button"
													className="btn  btn-warning mt-2"
													style={{ display: store.vista ? "none" : "block" }}
													onClick={() => actions.favoritos("add", item.name)}>
													Add to favorites
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
				<div className="text-center col-12 mt-5">
					<h1 className="titles">Planets</h1>
				</div>
				<div className="carouselPlanetas col-10 mx-auto mt-2 mb-3">
					<div className="carouserlLista">
						<Slider
							customPaging={i => {
								return <div>{"•"}</div>;
							}}
							{...settings}>
							{store.planets.map((item, index) => {
								return (
									<div className="carouserlElemento " key={index}>
										<div className="row">
											<div className="col-12 col-md-6">
												{store.planets[2] != undefined || store.planets.length != 0 ? (
													<img src={item.image} alt="planeta" className="img-fluid mx-auto" />
												) : (
													"loading..."
												)}
												<p>
													{store.planets[2] != undefined || store.planets.length != 0
														? item.name
														: "loading..."}
												</p>
											</div>
											<div className="col-12 col-md-6">
												<ul className="list-group ">
													<li
														className="list-group-item"
														style={{ background: "transparent" }}>
														Diameter:
														{" " + item.diameter}
													</li>
													<li
														className="list-group-item"
														style={{ background: "transparent" }}>
														Population:
														{" " + item.population}
													</li>
												</ul>
												<Link to="/detail">
													<button
														type="button"
														className="btn  btn-warning "
														onClick={() => actions.detalle(index)}>
														More info..
													</button>
												</Link>
												<button
													type="button"
													className="btn  btn-warning mt-2"
													style={{ display: store.vista ? "none" : "block" }}
													onClick={() => actions.favoritos("add", item.name)}>
													Add to favorites
												</button>
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				</div>
			</div>
		);
	}
};
