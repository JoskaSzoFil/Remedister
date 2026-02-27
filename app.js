import express from 'express'
import { testConnection } from './db.js'

const app = express()
const port = process.env.APPPORT

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Bienvido a la API!!!!')
})

//? Importation of all routers
import generoRouter from './router/generoRoutes.js'

app.use('/genero', generoRouter)

function startApp(){
    app.listen(port, () => {
        console.log(`App escuchando el puerto: ${port}`)
    })
    testConnection()
}

startApp()