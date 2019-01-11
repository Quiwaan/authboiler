//load up env variable 
require('dotenv').config();
var express = require('express');
var app = express();
var layouts = require('express-ejs-layouts');
var parser = require('body-parser');
var passport = require('./config/passportConfig')
var flash = require('connect-flash');
var session = require('express-session')

//decalre a refrence to models folder
var db = require('./models')

app.set('view engine', 'ejs');
app.use (layouts);
app.use('/', express.static('./static'));
app.use(parser.urlencoded({extended: false }));
app.use(session({
	secret: process.env.SESSIONS_SECRET,
	resave: false,
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//custom middleware -write data to locals
app.use(function(req, res, next){
	res.locals.alerts = req.flash();
	res.locals.user = req.user;
	next();
})


app.get('/', function(req, res){
		res.render('home');
})




//include any routes we need
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profiles'))


app.listen(8000)