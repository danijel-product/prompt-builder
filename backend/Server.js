import express from 'express'
import cors from 'cors' 
import router from './Router.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',router)

app.listen(5000, () =>{
    console.log("Server is running")
})