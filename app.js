const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/card', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's tomb?" })
})

app.get('/hello', (req, res) => {
  res.render('hello')
})

app.post('/hello', (req, res) => {
  res.render('hello')
})

app.listen(3000, () => {
  console.log('App is running on localhost:3000!')
})