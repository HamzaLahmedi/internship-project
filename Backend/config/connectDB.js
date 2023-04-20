const mongoose=require('mongoose')


const connectDB=async()=>{
   
    await mongoose.connect(process.env.MONGO_URI)
    
    try {
        console.log("db connected")
    } catch (error) {
        console.log("db not connected")  
    }
}
module.exports=connectDB