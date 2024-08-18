import { Fragment } from "react";
import './EstilosCiudad.css'

function Ciudad ( {nombre, descripcion, imagen} ){

    return (
        <>
        <div className="ciudad">
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <img src={imagen} alt={nombre} />
        </div>
        </>
    );
}

export default Ciudad;