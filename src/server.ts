import express from 'express'


const app = express()


app.get('/', (request, response) => response.json({ error: "ahhh Maycon" }))


app.listen(3333)