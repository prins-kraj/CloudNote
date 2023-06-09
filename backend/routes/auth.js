const express = require('express');
const User = require('../models/User');
const router = express.Router();


// create a user using : POST "/api/auth". Doesn't required auth
router.post('/', (req, res)=>{
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send(req.body);
})

module.exports = router;