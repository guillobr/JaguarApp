require('dotenv').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const { DB_USER, DB_PASSWORD , DB_URL } = process.env



// const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.naitk.mongodb.net/hquotes
// ?retryWrites=true&w=majority`

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@alianzaj.mp5ws0z.mongodb.net/alianzaj?retryWrites=true&w=majority`

mongoose.connect(DB_URL).catch((err) => {
  console.log('ERROR AL CONECTAR', err)
})

const db = mongoose.connection

db.on('open', (_) => {
  console.log('conectado a ', uri)
})
db.on('error', (err) => {
  console.log('error en db', err)
})
