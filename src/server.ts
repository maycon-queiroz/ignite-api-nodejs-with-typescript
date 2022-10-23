import express from 'express'


const app = express()
app.use(express.json())


app.get('/', (request, response) => response.json({ error: "ahhh Maycon" }))

app.post('/', (request, response) => {
  const { name } = request.body

  response.json({ name })
})

app.listen(3333)