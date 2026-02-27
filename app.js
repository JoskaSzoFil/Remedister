import express from 'express'
import { testConnection } from './db.js'

const app = express()
const port = 5555

//app.use('/')

function startApp(){
    app.listen(port, () => {
        console.log(`App escuchando el puerto: ${port}`)
    })
    testConnection()
}

startApp()