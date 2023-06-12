const User = require('../models/User')
const brcypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const crypto = require('crypto');
const nodemailer = require('nodemailer');


exports.signUp = async (req, res) => {
    const { firstName, lastName, email, password,cin } = req.body;
    try {
        // check user exist or not
        const checkuser=await User.findOne({email})
        if(checkuser){
            return res.status(401).json({errors:[{msg:"user already exists"}]})
        }
      const user = new User({
        firstName,
        lastName,
        email,
        cin,
        password,
        
      });
      user.password=await brcypt.hash(password,10)
      await user.save();
      // generate token
      const payload={
        id:user._id
    }
    const token = jwt.sign(payload,process.env.secret_key,{expiresIn:'3d'});
      res.status(201).json({ user, msg: "user created",token });
    } catch (error) {
      console.error(error); // Log the error object to the console
      res.status(500).send("server error");
    }
  };
  




  exports.logIn = async (req,res)=>{
    const {email, password}=req.body
    try {
        const user=await User.findOne({email})
        if (!user){
            return res.status(400).json({errors:[{msg:"bad cridentials"}]})
        }
        const isMatch=await brcypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({errors:[{msg:"bad cridentials"}]})
        }
        // generate token
      const payload={
        id:user._id
    }
    const token = jwt.sign(payload,process.env.secret_key,{expiresIn:'3d'});
      res.status(200).json({ user, msg: "log in with success",token });
    } catch (error) {
        
    }
  }




  exports.current=async(req,res)=>{

    try {
        const user=await User.findById(req.user.id).lean()
        const {password,...rest}=user
        res.send(rest)
        
    } catch (error) {
        res.status(500).send('server error')
  
    }
  }

  

  exports.allUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).send({msg:"all users",users})
    } catch (error) {
        res.status(500).send("server error");
    }
    }


    exports.getOneUser=async(req,res)=>{
      const {id}=req.params
      try {
          const user = await User.findById(id)
          res.status(200).send(user)
      } catch (error) {
          res.status(500).send("server error");
      }
  }

  exports.deleteUser=async(req,res)=>{
    const {id}=req.params
    try {
        await User.findByIdAndDelete(id)
        res.status(200).send("user deleted")
    } catch (error) {
        res.status(500).send("server error");
    }
}

exports.updateUser=async(req,res)=>{
    const {id}=req.params
    try {
        const updateUser=await User.findByIdAndUpdate(id,{$set:{...req.body}},{ new: true });
        res.status(200).send({msg:"user updated",updateUser})
    } catch (error) {
        res.status(500).send("server error");
    }
}






exports.forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {

      const user = await User.findOne({ email });

      if (!user) {
          res.status(404).json({
              message: `User with email ${email} was not found!`
          });
      } else {
          const token = crypto.randomBytes(2).toString('hex');

          // const hashedToken = await bcrypt.hash(token, 10);

          await user.updateOne({
              resetPasswordToken: token,
              resetPasswordExpires: Date.now() + 3600000
          });

          const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: process.env.EMAIL,
                  pass: process.env.PASSWORD
              }
          });

          const mailOptions = {
              from: process.env.EMAIL,
              to: email,
              subject: 'Link To Reset Password',
              html: `<p>Hello,</p>
              <p>We received a request to reset the password for your account. Please click the button below to reset your password:</p>
              <a href="${token}" style="background-color:#3498db;border-radius:28px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:17px;line-height:50px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;">Reset Password</a>
              <p>If you did not request a password reset, please ignore this message.</p>
              <p>Your reset token is : ${token}.</p>
              <p>Best regards,</p>
              <p>Your Sentinelle Team</p>
              <p><a href="https://www.sentinelle.com">https://www.sentinelle.com</a></p>
              `
          };

          transporter.sendMail(mailOptions, (err, response) => {
              if (err) {
                  console.error('there was an error: ', err);
              } else {
                  console.log('here is the res: ', response);
                  res.status(200).json({ message: 'recovery email sent', token: token });
              }
          });
      }
  } catch (error) {
      res.status(500).json({
          message: error.message || "Something went wrong while retrieving user."
      });
  }
};





