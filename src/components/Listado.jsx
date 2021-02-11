import React, {Fragment, useState} from 'react';

const Listado = () => {

    // numero: es la constante para acceder al array
    // setNumero: es la funcion para modificar el array
    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6]);
    return(
        <Fragment>
            <ul>
                {   // Empiezo a usar javascript
                    numeros.map((item, index) => {
                        <li key={index}>{item}</li>
                    })
                }
            </ul>
        </Fragment>
    )
}

export default Listado;