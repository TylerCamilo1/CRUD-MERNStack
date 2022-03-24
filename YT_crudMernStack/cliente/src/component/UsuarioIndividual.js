import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'


function UsuarioIndividual({usuario}){

    const navegar = useNavigate()
    // las animaciones tomadas de https://michalsnik.github.io/aos/ buena libreria

    useEffect(() =>{
        AOS.init()
    })


    //funcion de eliminar un usuaio
    function borrarusuario(idusuario){
        axios.post('/api/usuario/borrarusuario',{idusuario:idusuario}).then(res =>{
            console.log(res.data)
            //alert(res.data)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Se ha agregado correctamente',
                showConfirmButton: false,
                timer: 15000
              })
              navegar(0)

        }).catch(err => {
            console.log(err)
        })

    }
    return(
        <div className='container'>
            <div className='row'>
                
                <div className = "col-sm-6 offset-3" data-aos="fade-left" 
                        data-aos-duration="1000"
                        data-aos-easing="linear">
                    <ul className='list-group-flush'>
                        <li className='list-group-item'><p>Id estudiante: </p>{usuario.idusuario}</li>
                        <li className='list-group-item'><p>Nombre estudiante: </p>{usuario.nombre}</li>
                        <li className='list-group-item'><p>email estudiante: </p>{usuario.email}</li>
                        <li className='list-group-item'><p>telefono estudiante: </p>{usuario.telefono}</li>
                    </ul>
                   
                    <Link to = {`/editarusuario/${usuario.idusuario}`}><li className="btn btn-outline-success">Editar</li></Link>
                    &nbsp;
                    <button type="button" class="btn btn-outline-danger" onClick={()=>{borrarusuario(usuario.idusuario)}}>Eliminar</button>
                    <hr className="mt-4"></hr>                    
                </div>               
            </div>            
        </div>
    )
}
export default UsuarioIndividual