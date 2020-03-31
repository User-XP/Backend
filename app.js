const express = require("express");
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//routes
const authRoutes = require('./routes/auth-routes');
const dashboardRoutes = require('./routes/dashboard-routes');

const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

var app = express()


app.set('view-engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(keys.mongodb.dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

var db = mongoose.connection;

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
	console.log("connection succeeded");
})

app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: [keys.session.cookieKey]
}));

//initiliaze passport
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);
app.use('/dashboard',dashboardRoutes);
app.use(express.static('public'));

//SignUp Form Submission
/* TO DO
*  Check if the user is already present in the database before inserting
*
*/
app.post('/signup', async function (req, res) {

	try {
		const hashedPassword = await bcrypt.hash(req.body.password,10);
		var data = {
			"name": req.body.name,
			"email": req.body.email,
			"password": hashedPassword,
			"company-name": req.body.companyname,
		}
		db.collection('details').insertOne(data, function (err, collection) {
			if (err) throw err;
			console.log("Record inserted Successfully");
		});

		//redirect to login page
		res.redirect('/login');

	} catch(error) {
		//if signup fails
		res.render('signup.ejs');
	}
	
});

app.post('/login', passport.authenticate('local', { successRedirect: '/dashboard',failureRedirect: '/login'}),(req,res) => {
	res.send('middleware executed..data recieved ' + req.body.email );
});


app.listen(3000, function(){
	console.log("server listening at port 3000");
})
