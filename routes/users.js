var express = require('express'); //import express module in 'express' variable
var router = express.Router(); // an express application is created in 'router' variable using Router() method of express variable. Basically, a Router object is created in 'router' variable.
const users = require('../controllers/userController');
/* GET users listing. */
router.get('/:userID', users.getUser); //if we don't pass any value in url i.e localhost:3000/users then NOT FOUND Error.

module.exports = router;
