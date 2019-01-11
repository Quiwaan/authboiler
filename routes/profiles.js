var express = require('express');
var router = express.Router();

var loggedIn = require('../middleware/loggedIn');
var isAdmin = require('../middleware/isAdmin');


router.get('/', loggedIn, function(req, res){
	res.render('./profile')
})

router.get('/admins', function(req, res){
	res.render('admins')
})


module.exports = router;
