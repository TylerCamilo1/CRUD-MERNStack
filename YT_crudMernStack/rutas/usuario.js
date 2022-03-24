const express = require('express')
const router = express.Router()

const mongoose = require ('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    id: String,
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String, 
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

/*
router.get('/ejemplo', (req,res) =>{
    res.end('carga desde ruta ejemplo')
})*/

//LLAMADO DE NUESTRA API PARA AGREGAR USUARIOS

router.post('/agregarusuario', (req,res) =>{
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        id: req.body.id,
        telefono: req.body.telefono,
        email: req.body.email,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente')
        }
        else{
            res.send(err)
        }
    })
})

/// API APRA OBTENER TODOS LOS USUARIOS
router.get('/obtenerusuarios',(req,res) =>{
    ModeloUsuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

/// API APRA OBTENER DATA DE USUARIOS
router.post('/obtenerdatausuario',(req,res) =>{
    ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

// actualiza el usuario
 //la functiononeandupdate me encuentra los datos relacionados al usuario

router.post('/actualizausuario', (req,res) =>{
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
    }, (err) => {
        if(!err){
            res.send('Usuario actializado correctamente')
        }
        else{
            res.send(err)
        }

    })
})



router.post('/borrarusuario', (req,res) =>{
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}, (err) =>{
        if(!err){
            res.send('Estudiante eliminado correctamente')
        }
        else{
            res.send(err)
        }

    })
        
})