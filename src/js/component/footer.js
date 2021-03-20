import React, { Component } from "react";

export const Footer = () => (
	<footer className=" text-center text-lg-start mt-5">
		<div className="container p-4">
			<div className="row">
				<div className="col-lg-6 col-md-12 mb-4 mb-md-0">
					<h5 className="text-uppercase">PRIVACY POLICY</h5>
					<p>
						The Walt Disney Company has a rich tradition of bringing great stories, characters, and
						experiences to our guests around the world, and our sites and applications are created to
						entertain and connect guests with the best that we have to offer on the platforms and devices
						our guests prefer. When our guests use our sites and applications, we may obtain data from and
						about guests and their devices.
					</p>
				</div>
				<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
					<h5 className="text-uppercase mb-0">FOLLOW STAR WARS:</h5>
					<div id="social" className="container text-center mt-5">
						<a href="https://www.instagram.com/starwars/" target="blank" className="ico">
							<i className="fab fa-instagram fa-2x" />
						</a>
						<a
							href="https://www.facebook.com/starwarsla/?brand_redir=169299103121699"
							target="blank"
							className="ico">
							<i className="fab fa-facebook fa-2x" />
						</a>
						<a href="https://twitter.com/starwars" target="blank" className="ico">
							<i className="fab fa-twitter fa-2x" />
						</a>
						<a
							href="https://www.youtube.com/channel/UCZGYJFUizSax-yElQaFDp5Q"
							target="blank"
							className="ico">
							<i className="fab fa-youtube  fa-2x" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
			© 2021 Copyright:
			<a className="text-dark" href="https://mdbootstrap.com/">
				Lucasfilm Ltd
			</a>
		</div>
	</footer>
);
