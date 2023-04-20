const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({

firstName:{
    type:String,
    required:true
},
lastName:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
cin:{
    type:Number,
    required:true,
    unique:true
},
phoneNumber:{
    type:Number,
    
},

date_of_birth:{
    type:Number,
},
date_of_birth:{
    type:String
},
addresse:{
    type:String
},
role:{
    type:String,
    default:"user",
    enum:["user","admin"]
}

})
module.exports=mongoose.model('User',userSchema)