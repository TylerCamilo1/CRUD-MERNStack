import React, { useEffect, useState } from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import uniqid from 'uniqid'
import axios from 'axios'


function ListaUsuarios(){


    const[datausuarios, setdatausuario] = useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res => {
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err =>{
            console.log(err)
        })
    },[])

    //MAPEO DE LISTA DE USUARIOS EN EL OBJETO USUARIO

    const listausuarios = datausuarios.map(usuario => {
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Lista de estudiantes</h2>
            {listausuarios}
        </div>
    )
}
export default ListaUsuarios