const express = require('express')
const app = express()
const port = 5000


app.get('/', (req, res)=>{
    res.send('college in running')
})

app.listen(port, ()=>{
    `college port is ${port}`
})