import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const CasaPapel = ({nombre,edad,genero,foto}) =>(

    <>
        <div className="card col-md-4" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title"> {nombre }</h5>
            <p className="card-text">Edad: {edad}</p>
            <p className="card-text">Genero: {genero}</p>
            <img className="img" src={foto}  />
           
            </div>
        </div>
    </>
    
);

CasaPapel.prototype = {

    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string,
    foto: PropTypes.node
}

CasaPapel.defaultProps = {

    nombre: "nombre no asignado",
    edad: 0,
    genero: "Genero no Asigando",
    foto: "foto no asignado"
}
    
export default CasaPapel;