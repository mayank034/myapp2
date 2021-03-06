const jwt = require('jsonwebtoken');        //imported and stored jwt module.
const config = require('../config.json');   // imported and stored config.json file.

const demoUser = {                          //created an object demoUser containing 
  _id: 22031995,                            // id,
  email: 'rajesh@studiographene.com',       // email,
  password: "1234567"                       // password.           
};

const userRegistration = async(req, res) => {   // The word “async” before a function means one simple thing: a function always returns a promise.
  try {
    let postData = req.body;
    res.send({status: 200, data: postData, message: 'API Success Message'});
  } catch(e) {
    res.send({status: 500, data: e, message: 'API Error Message'});
  }
};

const userLogin = async(req, res) => {
  try {
    console.log(config.jwtSecret);
    if(req.body.email !== demoUser.email) {
      res.status(401).send({message: 'User not found'});
    } else if(req.body.password !== demoUser.password) {
      res.status(401).send({message: 'Invalid password'});
    } else {
      const token = jwt.sign({ userId: demoUser._id }, config.jwtSecret, { expiresIn: '24h' });
      res.status(200).send({token, message: 'Login Successfull'});
    }
  } catch(e) {
    res.status(500).send({error: e, message: 'Login failed. Please try again'});
  }
};

module.export = {
  userRegistration,
  userLogin  
};