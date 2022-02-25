
import React from 'react';
import './BotonMolon.css';
import axios from 'axios';

const BotonMolon = (props) => {

    const mehasPulsado = async () => {
        try {

            let res = await axios.get(props.url);

            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className='designBoton' onClick={() => mehasPulsado()}>
            {props.nombre}
        </div>
    )
}

export default BotonMolon;