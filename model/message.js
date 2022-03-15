const mongoose = require("mongoose")

const messageSchema = new  mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    age:{
        type : Number,
        required : true
    },
    message : {
        type: String,
        required: true,
    },
    createDate : {
        type : Date, 
        default : function () {
            const date = new Date()
            const day = date.getDate()
            const month = date.getMonth()+1
            const year = date.getFullYear()
            return `${day}-${month}-${year}`
        }
    }

})

module.exports = mongoose.model("Message",messageSchema)