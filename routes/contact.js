
const express = require("express")
const router = express.Router()
const path = require("path")
const file = require('fs')

const rootDir = require("../utility/path")

router.post("/admin/message",(req,res,next)=>{
    //console.log(req.body)
    file.writeFileSync("msg.txt",`${req.body.client} with the email: ${req.body.email} wrote a message that says: ${req.body.message}`)
    res.redirect("/")
})

router.get("/admin/contact",(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contact.htm"))
})

module.exports = router