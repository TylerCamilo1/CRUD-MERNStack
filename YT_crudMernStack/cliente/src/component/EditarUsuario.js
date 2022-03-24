import axios from 'axios'
import React, {useEffect, useState}  from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

function EditarUsuario(){
    
    const params = useParams()

      //hooks en react 
      const[nombre, setNombre] = useState('')
      const[id, setId] = useState('')
      const[telefono, setTelefono] = useState('')
      const[email, setEmail] = useState('')
      

    useEffect(() => {
        axios.post('/api/usuario/obtenerdatausuario',{idusuario: params.idusuario}).then(res =>{
            console.log(res.data[0])
            const datausuario = res.data[0]
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
        })
    }, [])

    //Crear la funcion del oneclick de abajo

    function editarUsuario(){
        //crear un nuevoi objeto que actualiza el usuario

    const actualizarusuario = {
            id:id,
            nombre : nombre,
            telefono : telefono,
            email : email,
            idusuario : params.idusuario
        }

        //Realiza la peticion hacienod usando axios
    axios.post('/api/usuario/actualizausuario', actualizarusuario)
        .then(res => {
            console.log(res.data)
            //alert(res.data)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Se ha editado correctamente',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .then(err => {console.log(err)})    
    }

    return(
        <div className='container'>
            <div className='row'>
               <h2 className='mt-4'>Editar un estudiante</h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='Nombre' className="form-label"> Nombre </label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>
{/*
                    <div className='mb-3'>
                        <label htmlFor='ID estudiante' className="form-label"> ID </label>
                        <input type="int" className="form-control"value={id} onChange={(e) => {setId(e.target.value)}}></input>
                    </div>
    */}
                    <div className='mb-3'>
                        <label htmlFor='Telefono' className="form-label"> Telefono </label>
                        <input type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className="form-label"> email </label>
                        <input type="text" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>

                    <button onClick={editarUsuario} className="btn btn-outline-success">Editar Usuario</button>

                </div>
            </div>



        </div>
    )
}

export default EditarUsuario