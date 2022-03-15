const express = require('express');
const route = require('./routes/message');
const app = express()
require("./connect/message")
const db = require("./connect/message");
const notFound = require('./routes/not-found');
require("dotenv").config()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/v1/message",route)
app.use(notFound)



const PORT = process.env.PORT || 5000;

const start = async () =>{
    try {
        await db(process.env.DATABASE_URI)
        console.log("database connected")
        app.listen(PORT,()=>{
            console.log(`listening on port : ${PORT}...`)
        })

    } catch (error) {
        console.log(error)
    }
   
 
}

start()

