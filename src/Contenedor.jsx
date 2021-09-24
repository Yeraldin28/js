import React from 'react';
import Estudiante from './Estudiante';
// import logo from './logo.svg';

const casaPapel =[
    {
        "id" : 1,
        "nombre" : "Light Yagami",
        "edad" : 20,
        "genero" : "M",
        "foto" : "https://i1.wp.com/geeklaak.com/wp-content/uploads/2021/03/325232_881362.jpg"
    },
    {
        "id" : 2,
        "nombre" : "L",
        "edad" : 25,
        "genero" : "M",
        "foto" : "https://images2.wikia.nocookie.net/__cb20120126153253/wikiseriesjaponesas/es/images/thumb/2/2c/L_Death_Note.jpg/334px-L_Death_Note.jpg"
    },
    {
        "id" : 3,
        "nombre" : "Ryuk",
        "edad" : "infinitos",
        "genero" : "M",
        "foto" : "https://www.otakulegion.com/wp-content/uploads/2020/11/Ryuk-Guapo.png"
    },
    {
        "id" : 4,
        "nombre" : "Misa Amane",
        "edad" : 19,
        "genero" : "F",
        "foto" : "https://pm1.narvii.com/6211/acdc39fda3b74f31568c2e6701225e7a9e614187_hq.jpg"
    },
    {
        "id" : 5,
        "nombre" : "Near",
        "edad" : 18,
        "genero" : "M",
        "foto" : "http://pm1.narvii.com/6470/73e6da8d2d1d3d1b1cf5e9286ddbd0919467cf27_00.jpg"
    },
    {
        "id" : 6,
        "nombre" : "Mello",
        "edad" : 15 ,
        "genero" : "M",
        "foto" : "http://2.bp.blogspot.com/-HSf2OGqrqXs/VVxOH-VgImI/AAAAAAAAArE/87x2lAroEcA/s1600/Mello_5.jpg"
    }

]

const Contenedor = () =>(

    <>
        {
            casaPapel.map(c => <Estudiante nombre={c.nombre}edad={c.edad}genero={c.genero}foto={c.foto}id={c.id} />)
        }
    </>
    
);

export default Contenedor;
