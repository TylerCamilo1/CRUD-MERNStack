const express = require ('express')
const app = express()

//IMPORTAR CONEXION mongoDB
const archivoBD = require('./conexion')

//importacion del archivo de rutas y modelo de usuario
const rutausuario = require('./rutas/usuario')
// importar body parser de los campos obtener la inf
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/',(req,res) => { 
    res.end('Bienvenidos al Backend NODE.js, corriendo...')
})

//configurar server basico
app.listen(5000, function(){
    console.log('El servidor configruado está corriendo, y esta cansado')
})