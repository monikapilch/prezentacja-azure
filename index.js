const express = require('express')

const app = express()
app.use(express.static('public'))

const port = process.env.PORT || 7600
app.listen(port)
