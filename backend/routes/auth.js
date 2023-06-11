const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// jwt secret key which is signature of jwttoken
const JWT_SECRET = "helloprincekumar";


// create a user using : POST "/api/auth/createuser". Doesn't required login
router.post('/createuser',[
    // name must be at least 3 chars long
    body('name', 'Invalid name').isLength({ min: 3 }),
    // email must be an email
    body('email', 'Invalid email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'Password must be 5 character').isLength({ min: 5 }),
] , async (req, res)=>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check user already exist or not
    try {
      let user = await User.findOne({email: req.body.email});
      if (user) {
        return res.status(400).json({error: "This email already exist"})
      }

      // hassing the password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // create User
      user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
        })

        // jwt authtoken
        const data = {
          user: {
            id: user.id
          }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
       
        // res.json(user);
        res.json({authtoken});
        
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Error Occured");
    }
})

module.exports = router;