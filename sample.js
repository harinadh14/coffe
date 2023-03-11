const express = require("express")
const mongoose = require("mongoose")

const app = express()
var path = __dirname + "/views/"
var router = express.Router()

mongoose.connect("mongodb://127.0.0.1:27017/coffedata")
const tableschema = mongoose.Schema({
    name: String,
    email:String,
    contact:Number, 
    date:Date, 
    numbers:Number, 
    events:String,
})
const tablersrv = mongoose.model("tablersrv", tableschema );


app.use("/", router)
app.get("/viewsdir" , (req,resp) => {
    const name= req.query.Name;
    const email= req.query.Email;
    const contact = req.query.Contact;
    const date= req.query.Date;
    const numbers= req.query.Numbers;
    const events= req.query.Event;
    
    const table = tablersrv({
                    name:name,
                    email:email,
                    contact:contact,
                    date:date,
                    numbers:numbers,
                    events:events})

                    table.save()
    console.log(name);
    console.log(date);
    resp.sendFile(path+ "index.htm")})
app.listen(3002)