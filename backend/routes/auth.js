const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// create a user using : POST "/api/auth". Doesn't required auth
router.post('/',[
    body('name', 'Invalid name').isLength({ min: 3 }),
    // username must be an email
    body('email', 'Invalid email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'Password must be 5 character').isLength({ min: 5 }),
] , (req, res)=>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
      .catch(err=> {console.log(err)
      res.json({error: 'please enter a unique email', message: err.message})});
})

module.exports = router;