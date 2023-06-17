const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

// jwt secret key which is signature of jwttoken
const JWT_SECRET = "helloprincekumar";

// ROUTE 1: 
// create a user using : POST "/api/auth/createuser". Doesn't required login
router.post('/createuser',[
    // name must be at least 3 chars long
    body('name', 'Invalid name').isLength({ min: 3 }),
    // email must be an email
    body('email', 'Invalid email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'Password must be 5 character').isLength({ min: 5 }),
] , async (req, res)=>{
  let success = false;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    // check user already exist or not
    try {
      let user = await User.findOne({email: req.body.email});
      if (user) {
        return res.status(400).json({success, error: "This email already exist"})
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

        // jwt data which is user id
        const data = {
          user: {
            id: user.id
          }
        }
        // jwt authentication token
        const authtoken = jwt.sign(data, JWT_SECRET);
       
        // res.json(user);
        success= true;
        res.json({success, authtoken});
        
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Error Occured");
    }
})


// ROUTE 2:
// login a user using : POST "/api/auth/login". Doesn't required login
router.post('/login',[
  body('email', 'Invalid email').isEmail(),
  body('password', 'Invalid password').exists(),
] , async (req, res)=>{
  let success =false;
  // if there are error , return bad request and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // retreive email and password for database
  const {email, password} = req.body;
  try {
    let user = await User.findOne({email});  // finding email from collection of email
    if (!user) {
      success = false;
      return res.status(400).json({error: "Please enter valid credential"}); // if user not find
    }

    const passwordCompare = await bcrypt.compare(password, user.password);  // matching the password
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({success, error: "Please enter valid credential"});   // password not matched
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET); 
    success=true;
    res.json({success,authtoken});
  } catch (error) {                  // catching error
    console.log(error.message);
    res.status(500).send("Server Error Occured");
    
  }
});


// ROUTE 3:
// Get logged in user detail using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res)=>{

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")   // get detail except password
    res.send(user);
  } catch (error) {                  // catching error
    console.log(error.message);
    res.status(500).send("Server Error Occured");
    
  }
});

module.exports = router;