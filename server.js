const express = require("express")
const app = express();
const port = 4100
const path = require("path")
const fs = require("fs")

app.use(express.static(path.join(__dirname, "style")))
app.use(express.static(path.join(__dirname, "js")))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve("./views/home.html"))
})

app.get("/pixelart",(req,res)=>{
    res.sendFile(path.resolve("./views/pixelart.html"))
})
app.get("/onlinetext",(req,res)=>{
    res.sendFile(path.resolve("./views/onlinetext.html"))
})
app.get("/passgenerator",(req,res)=>{
    res.sendFile(path.resolve("./views/passgenerator.html"))
})
app.get("/qr",(req,res)=>{
    res.sendFile(path.resolve("./views/qr.html"))
})
app.get("/XO",(req,res)=>{
    res.sendFile(path.resolve("./views/XO.html"))
})
app.get("/coin",(req,res)=>{
    res.sendFile(path.resolve("./views/coin.html"))
})
app.get("/countries",(req,res)=>{
    res.sendFile(path.resolve("./views/countires.html"))
})

app.listen(port,()=>{
    console.log(`server is started at port ${port}`)
})