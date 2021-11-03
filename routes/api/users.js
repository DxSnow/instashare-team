const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../../models/User");
const gravatar = require('gravatar');

// @route POST /api/users/register
// @desc Register a user
// @access Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {

        const avatar = gravatar.url(req.body.email,{
          s:'200',
          r:'pg',
          d:'mm'
        }); 

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          avatar
        }) // end of newUser registration

        //hash password
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          }
          );// end of bcrypt.hash
        }//end of genSalt call back
        );
      } // end of else
    })  //end of findOne.then
    .catch(err => console.log(err)) //end of findOne.catch
} // end of (req,res)
)// end of router.post


// @route POST /api/users/login
// @desc Login a user
// @access Public
router.post('/login', (req, res) => {
  User.findOne({email: req.body.email})
  .then(user => {
    //check if user exists
    if(!user){ // if user not found
      return res.status(400).json({email: 'User not found!'})
    }
    //check the password
    bcrypt.compare(req.body.password, user.password)
      .then(isMatch => {
        if(!isMatch){
          return res.status(400).json({password: 'Password incorrect'});
        }else{
          return res.json({msg: 'Success'});
        }
      })
  })
})

module.exports = router;
