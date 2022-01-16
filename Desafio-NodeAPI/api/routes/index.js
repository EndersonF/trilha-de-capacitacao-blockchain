const express = require('express')
const notas = require('./notas-rotas')


module.exports = app =>{
    app.use(express.json())
    app.use(notas)    
}



