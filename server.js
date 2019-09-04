const express = require('express')
const next = require('next')
require("dotenv").config()
const data = require("./api");


const port = parseInt(process.env.PORT) || 3000 // 
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()



app.prepare().then(() => {
    const server = express()

    server.get('/posts2', (req, res) => {
        return app.render(req, res, '/data', { data })
    })

   
    server.get('/posts/:id', (req, res) => {
        return app.render(req, res, '/posts', data)
    })

    server.get('*', (req, res) => {

        return handle(req, res)
    })

    server.listen(port, err => {

        if (err) {
            console.log("is errror page???")
            throw err
        }
        console.log(`> Ready on http://localhost:${port}`)
    })
})
