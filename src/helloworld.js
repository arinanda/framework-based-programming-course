const express = require('express')
const app = express()
const port = 5555

app.get('/', (req, res) => res.send('hello world'))

app.listen(port)