const express=require('express')
require('dotenv').config()

const app=express()
const authRouter=require('./routes/auth')
const connectDB=require('./config/connectDB')

const port=process.env.PORT || 5000




// connect with data base
connectDB()

//midlleware
app.use(express.json())

app.use('/api/auth',authRouter)

app.listen(port,()=>console.log(`server running on port ${port}`))
