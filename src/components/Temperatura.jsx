import React, {useState} from 'react'

const Temperatura = () => {
    const[temperatura, setTemperatura] = useState(19)
    const Subir = () => {
        setTemperatura(temperatura +1)
    }

    const Bajar = () => {
        setTemperatura(temperatura -1)
    }

    return(
        <div className ='container-sm'>
            <h3>La temperatura es: {temperatura}</h3>
            <p>
                {   // operador ternario
                    temperatura > 21 ? 'Hace calor' : 'Hace frio'
                }
            </p>
            {/* Uso boostrap para colorear */}
            <button onClick={Subir} className="btn btn-warning btn-block">Aumentar Temperatura</button>
            <button onClick={Bajar} className="btn btn-primary btn-block">Reducir Temperatura</button>
        </div>
    )
}

export default Temperatura;