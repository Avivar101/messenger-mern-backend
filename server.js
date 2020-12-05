//import dependencies
import express from 'express'

//app config
//ceated an instance for the appplication
const app = express()
//port that would be use to call the application
const port = process.env.PORT || 4000

//db config

//api routes
app.get('/',(req,res) => res.status(200).send('hello world'))

//listener
//listen on the prot and fire the function
app.listen(port, ()=>console.log(`listening on loaclhost:${port}`))