
import React, {useState, useEffect} from 'react';
// import BotonMolon from '../../Components/BotonMolon/BotonMolon';
import'./Home.css';
import axios from 'axios';

const Home = () => {

    const [datosBackend, setDatosBackend] = useState([])

    useEffect(()=>{

        //console.log("ya han llegado",datosBackend);

    },[datosBackend])

    const traeCosasApi = async () => {
        let res = await axios.get("http://localhost:5500/usuarios");

        setDatosBackend(res.data);
    }

    if(datosBackend[1]?.name !== undefined){

        

        return(
            <div>
                {datosBackend?.map(alumno => {
                    return <div key={alumno.id}>
                        {alumno.name}
                        {alumno.age}
                        {alumno.email}
                        </div>
                })}
            </div>
        )

    } else {
        return(
            <div className='homePrincipal'>Soy Home Simpson
                {/* <BotonMolon nombre="mongoUsers" url={`http://localhost:5000/users`}/>
                <BotonMolon nombre="sequelizeUsers" url={`http://localhost:5500/usuarios`}/>
                <BotonMolon nombre="pelis" url={`http://localhost:5500/peliculas/favoritas`}/> */}
    
                <div onClick={()=>traeCosasApi()}>Clickme</div>
    
            </div>
        )
    }

    

};

export default Home;