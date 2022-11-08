const express = require('express')
const classContainer = require('./container/archivos.Container')

const app = express();

const PORT = 8070

// Instanciamos la clase
const archivo = new classContainer('productos.txt')

app.get('/products', async (req, res) => {
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