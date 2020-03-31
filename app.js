const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const passport = require('passport');

const initializePassport = require('./config/passport-setup')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

/* Mongoose connection */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
	console.log("connection succeeded");
})

var app = express()

app.set('view-engine','ejs');
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/signup', function(req, res){
	return res.render('signup.ejs');
})

app.post('/signup', async function (req, res) {

	try {
		const hashedPassword = await bcrypt.hash(req.body.password,10);
		var data = {
			"name": req.body.name,
			"email": req.body.email,
			"password": hashedPassword,
			"company-name": req.body.companyname,
			"phone": req.body.phone
		}
		db.collection('details').insertOne(data, function (err, collection) {
			if (err) throw err;
			console.log("Record inserted Successfully");
		});

		//redirect to login page
		res.redirect('signup_success.html');

	} catch(err) {
		//if signup fails
		res.redirect('registration-page.html');
	}
	
})

app.get('/login', checkNotAuthenticated, (req, res) => {
	res.render('login.ejs')
  })

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}))

function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
	  return next()
	}
  
	res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
	  return res.redirect('/dashboard')
	}
	next()
  }


app.listen(3000, function(){
	console.log("server listening at port 3000");
})
