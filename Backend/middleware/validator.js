const {body,validationResult}=require('express-validator')

const registerRules=[
   
    body('email','firstName is required').isEmail(),
    body('password','password is required').isLength({min:6}),
    body('cin',' cin is required').isLength({ min: 8, max: 8 }),
]




const validator=(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    next()
}


module.exports={registerRules,validator}