/*const express=require('express')
const { signUp, logIn, current, allUsers, getOneUser, updateUser, deleteUser,forgetPassword, logInAdmin } = require('../controllers/authController')
const { registerRules,validator, } = require('../middleware/validator')
const isAuth=require('../middleware/isAuth')

const router = express.Router()

//create new user and geerate token
router.post('/signup',registerRules,validator,signUp)
router.post('/login',logIn)
router.post('/loginAdmin',logInAdmin)
router.get('/current',isAuth,current)
router.get('/allUsers',allUsers)
router.get('/getOneUser/:id',getOneUser)
router.delete('/deleteUser/:id',deleteUser)
router.put('/updateUser/:id',updateUser)
router.post('/forgetPassword',forgetPassword)
module.exports=router*/