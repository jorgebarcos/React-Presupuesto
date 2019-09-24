import React, { Fragment, useState } from 'react';

function Pregunta(props) {
	const { guardarPresupuesto } = props;

	//definir el state
	const [ cantidad, guardarCantidad ] = useState(0);
	const [ error, guardarError ] = useState(false);

	// validar el presupuesto
	const agregarPresupuesto = (e) => {
		e.preventDefault();

		// validar
		if (cantidad < 1 || isNaN(cantidad)) {
			guardarError(true);
			return;
		}

		// Si se pasa la validación
		guardarError(false);
		guardarPresupuesto(cantidad);
	};
	return (
		<Fragment>
			<h2>Coloca tu Presupuesto</h2>

			{error ? <p className="alert alert-danger error">El presupuesto es incorrecto</p> : null}
			<form onSubmit={agregarPresupuesto}>
				<input
					type="number"
					className="u-full-width"
					placeholder="Agrega tu Presupuesto"
					onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
				/>
				<input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
			</form>
		</Fragment>
	);
}
export default Pregunta;
