import React, {useState} from 'react'

const Formulario = () =>{

    const[nombre, setNombre] = useState(" ");
    const[edad, setEdad] = useState(" ");
    
    // Capturo el evento submit por parametro
    const Validar = (event) => {
        event.preventDefault()
        console.log("Ha pulsado el boton");
        // Compruebo si el nombre tiene datos
        if(!nombre.trim()){
            console.log("El nombre está vacío");
            return;
        }
        if(!edad.trim()){
            console.log("La edad está vacía");
            return;
        }
    }

    return(
        <div className="container">
            <form onSubmit={Validar} className="form-group">
                <input 
                    placeholder="Nombre" 
                    type="text" 
                    className="form-control mb-3"
                    // Capturo el nombre
                    onChange={(e) => {setNombre(e.target.value)}}
                    />
                
                <input
                    placeholder="Edad" 
                    type="text"
                    className="form-control mb-3" 
                    // Capturo la edad
                    onChange={(e) => {setEdad(e.target.value)}}
                    />

                <input 
                    type="submit" 
                    className="btn btn-info btn-block"/>

            </form>
        </div>
    )
}

export default Formulario;