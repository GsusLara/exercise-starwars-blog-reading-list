import React from "react";
import "../../styles/carga.scss";

export const Carga = () => {
	return (
		<div className="container-fluid fullpage position-absolute">
			<div className="d-flex justify-content-center mt-5">
				<div className="spinner-border text-warning" role="status" aria-hidden="true" />
			</div>
			<div className="textCarga d-block col-12 text-center mt-3">
				<span>Loading....</span>
			</div>
		</div>
	);
};
