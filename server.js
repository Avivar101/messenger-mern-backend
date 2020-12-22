//import dependencies
import express from 'express'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import cors from 'cors'

import mongoMessages from './messageModel.js'

//app config
//ceated an instance for the appplication
const app = express()
//port that would be use to call the application
const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors())

//db config
const mongoURL ='mongodb+srv://admin:GNyA0YEbIXHjBa4D@cluster0.xcabl.mongodb.net/messengerDB?retryWrites=true&w=majority'

mongoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//to check if connection is working
mongoose.connection.once('open', () => {
    console.log('db connected')
})

//api routes
app.get('/',(req,res) => res.status(200).send('hello world'))

//save messages endpoint
app.post('/save/message', (req, res) => {
    const dbMessage = req.body

    mongoMessages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/retrieve/conversation', (req, res) => {
    mongoMessages.find(( err, data ) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//listener
//listen on the port and fire the function
app.listen(port, ()=>console.log(`listening on loaclhost:${port}`))