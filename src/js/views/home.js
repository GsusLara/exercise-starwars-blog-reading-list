import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardPerson } from "../component/cardPerson";
import { CardPlanets } from "../component/cardPlanets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const Leftbuton = props => {
	Leftbuton.propTypes = {
		className: PropTypes.string,
		onClick: PropTypes.func
	};
	return (
		<div className={props.className} onClick={props.onClick}>
			<i className="fas fa-chevron-left" />
		</div>
	);
};
const Rightbuton = props => {
	Rightbuton.propTypes = {
		className: PropTypes.string,
		onClick: PropTypes.string,
		style: PropTypes.string
	};
	return (
		<div
			className={props.className}
			onClick={onClick}
			style={{ ...props.style, display: "block", background: "red" }}>
			<i className="fas fa-camera fa-10x" />
		</div>
	);
};

export const Home = () => {
	const { store, actions } = useContext(Context);

	const settings = {
		// autoplay: true,
		// autoplaySpeed: 5000,
		infinite: true,
		slidesToShow: 3,
		dots: true,
		prevArrow: <Leftbuton />,
		nextArrow: <Rightbuton />
	};

	return (
		<div className="carousel row" style={{ background: "white" }}>
			<div className="carouselContenedor col-10 mx-auto">
				<div className="carouserlLista">
					<Slider
						customPaging={i => {
							return <div>{"•"}</div>;
						}}
						{...settings}>
						{store.people.map((item, index) => {
							return (
								<div className="carouserlElemento" key={index}>
									{store.people[2] != undefined ? (
										<img src={item.image} alt="personaje" style={{ height: "30vh" }} />
									) : (
										"loading..."
									)}
									<p>{store.people[2] != undefined ? item.name : "loading..."}</p>
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		</div>
	);
};
// <div className="container-fluid text-center">
// 	<div className="mt-5">
// 		<h1>Characters</h1>
// 		<div className="scrolling-wrapper row flex-row flex-nowrap mt-3 pb-4 pt-2">
// 			{store.people.map((item, index) => {
// 				return (
// 					<CardPerson
// 						key={index}
// 						name={item.name}
// 						img={item.image}
// 						sexo={item.gender}
// 						origen={item.homeworld}
// 						id={index}
// 					/>
// 				);
// 			})}

// </div>
// {store.people.map((item, index) => {
// 	return (
// 		<Paper key={index} square elevation={0} className={classes.header}>
// 			<Typography key={index}>{item.name}</Typography>;
// 		</Paper>
// 	);
// })}
