import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    username: String,
    massage: String,
    timestamp: String
})

export default mongoose.model('messages', messageSchema)