import React,{useState} from 'react'
import uniqid from 'uniqid'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


function AgregarUsuario(){
    const navegar = useNavigate()

    //hooks en react
    const[nombre, setNombre] = useState('')
    const[id, setId] = useState('')
    const[telefono, setTelefono] = useState('')
    const[email, setEmail] = useState('')
 
    function agregarUsuario(){
        var usuario = {
            id:id,
            nombre : nombre,
            telefono : telefono,
            email : email,
            idusuario : uniqid()
        }
        console.log(usuario)

        axios.post('/api/usuario/agregarusuario', usuario)
        .then(res => {
            //alert(res.data)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Se ha agregado correctamente',
                showConfirmButton: false,
                timer: 1500
              })
              navegar(0)

        })
        .then(err => {console.log(err)})

    }

    return(
        <div className='container'>
            <div className='row'>
               <h2 className='mt-4'>Crear un nuevo estudiante</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='Nombre' className="form-label"> Nombre </label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>
                    {/*                     
                    <div className='mb-3'>
                        <label htmlFor='IDestudiante' className="form-label"> ID interno </label>
                        <input type="number" className="form-control"value={id} onChange={(e) => {setId(e.target.value)}}></input>
                    </div> */}

                    <div className='mb-3'>
                        <label htmlFor='Telefono' className="form-label"> Telefono </label>
                        <input type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className="form-label"> email </label>
                        <input type="text" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>

                    <button onClick={agregarUsuario} className="btn btn-outline-success">Guardar Usuario</button>
                    

                </div>
            </div>



        </div>
    )
}
export default AgregarUsuario