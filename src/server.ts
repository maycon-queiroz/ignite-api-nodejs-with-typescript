import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: "Hellow word" })
})

app.listen(3333)