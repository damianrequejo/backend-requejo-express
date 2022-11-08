const express = require('express')
const classContainer = require('./container/archivos.Container')
//const moment = require('moment')

const app = express();

const PORT = 8070

// Instanciamos la clase
const archivo = new classContainer('productos.txt')

app.get('/products', async (req, res) => {
    //visitas.products++
    //visitas.fecha_ingreso_products = moment().format('MMMM Do YYYY, h:mm:ss a');
    const prods = await archivo.leer()
    res.send({ Productos: prods })
})

app.get('/productoRandom', async (req, res) => {
    const prods = await archivo.leer()
    const random = parseInt(Math.random() * prods.length)
    res.send({ Productos: prods[random]})
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})

//server.on('error', error => console.log(`error en server ${error}`))

//const visitas = {
//    products: 0,
//    fecha_ingreso_products: '',
//    prod_random: 0,
//    fecha_ingreso_products_random: ''
//}







//app.get('/visitas', (req, res) => {
//    res.send({ visitas })
//})



//app.listen(PORT, () => {
//    console.log(`Servidor corriendo en el puerto: ${PORT}`);
//})

