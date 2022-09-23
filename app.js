const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/studentdb'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected to mongo db...')
})

//Convert request data to Json
app.use(express.json()) 

const studentRouter = require('./routes/studentsRoute')

// Transfer all the requests from students endpoint to studentRouter
app.use('/students',studentRouter) 

//Start the server
app.listen(8080, () => {
    console.log('Server started')
})