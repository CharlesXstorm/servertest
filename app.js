
const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const path = require("path")

const homeRouter = require("./routes/home")
const contactRouter = require("./routes/contact")

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

app.use(contactRouter)
app.use(homeRouter)

app.listen(3000)