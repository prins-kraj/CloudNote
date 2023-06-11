const jwt = require('jsonwebtoken');

// jwt secret key which is signature of jwttoken
const JWT_SECRET = "helloprincekumar";

const fetchuser = (req, res, next)=>{
    // Get the user from the jwt token and add id to req object
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({error: "Please use a valid token"});
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);     // verify token
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Please use a valid token"});   // catch error
    }
}

module.exports = fetchuser;