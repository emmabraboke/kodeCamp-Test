const Message = require("../model/message")

const getAllMessage = async  (req,res)=>{
    try {
        const messages = await Message.find({})
        res.status(200).json({messages})
    } catch (error) {
        res.status(500).json(error)
    }
   
}

const createMessage = async (req,res)=>{
    try {
        const body = req.body
        const message = await Message.create(body)
        res.status(200).json({message})
    } catch (error) {
        res.status(500).json(error)
    }
   
}

const getMessage = async (req,res)=>{
    try {
        const {id: taskId} = req.params
        const message = await Message.findOne({"_id": taskId})
        if(!message){
           return  res.status(404).json({error : `message with id ${taskId} not found`})
        }
        res.status(200).json({message: message})    
    } catch (error) {
        res.status(500).json(error)
    }
    
}

const UpdateMessage = async (req,res)=>{
    try{
    const {id: taskId} = req.params
    const {message} = req.body

    messageUpdate = await Message.findOneAndUpdate({"_id" : taskId},{message},{new:true, runValidators: true})

    if(!messageUpdate){
        return  res.status(404).json({error : `message with id ${taskId} not found`})
     }
    res.status(200).json({messageUpdate})
    }
    catch(error){
        res.status(500).json(error)
    
    }
}

const deleteMessage = async (req,res)=>{
    try {
        const {id: taskId} = req.params
        const deletedMessage = await Message.findOneAndDelete({"_id" : taskId})
        if(!deletedMessage){
            return  res.status(404).json({error : `message with id ${taskId} not found`})
         }
        res.status(200).json({deletedMessage})
}
    catch (error) {
        res.status(500).json(error)
    
    }
} 

module.exports = {
    getAllMessage,
    createMessage,
    getMessage,
    UpdateMessage,
    deleteMessage
}