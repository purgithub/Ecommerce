

exports.userSignupValidator = (req, res, next)   => {
    req.check("name", "Name is required").notEmpty();
    req.check("email", "email must be 3 to 32 characters")
           .matches(/.+\@.+\..+/)
           .withMessage("email must contain @ sign.")
           .isLength({
                    min: 4,
                    max:32
                        });
    req.check("password"," Password is required").notEmpty();
           req.check("password")
           .isLength({min:6})
           .withMessage("password Must conatin at least 6 characters")   
           .matches(/\d/)
           .withMessage("password must contain single digit")                               
 
const errors= req.validationErrors();
if (errors){
     const firstError= errors.map(error=> error.msg)[0];
     return res.status(400).json({error:firstError})

    } 
    next();
};