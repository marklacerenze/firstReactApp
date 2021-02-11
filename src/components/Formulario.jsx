import React, {useState} from 'react'

const Formulario = () =>{
    return(
        <div className="container">
            <form className="form-group">
                <input placeholder="Nombre" type="text" className="form-control mb-3"></input>
                <input placeholder="Edad" type="text" className="form-control mb-3"></input>
                <input type="submit" className="btn btn-info btn-block"></input>
            </form>
        </div>
    )
}

export default Formulario;