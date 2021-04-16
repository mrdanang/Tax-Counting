const { urlencoded } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const bodyparser = require('body-parser')
const router = require('./routes/index')
const PORT = 3000


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(router)

app.listen(PORT, () => {console.log(`we are listening on port`, PORT)})