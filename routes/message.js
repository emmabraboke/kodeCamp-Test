const express = require("express")
const route = express.Router()
const {getAllMessage,createMessage,getMessage,UpdateMessage,deleteMessage} = require("../controller/message")


route.get("/", getAllMessage)

route.post("/", createMessage)

route.get("/:id", getMessage)

route.patch("/:id", UpdateMessage)

route.delete("/:id", deleteMessage)

module.exports = route