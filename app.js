const express = require("express")
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const flash = require('express-flash')
const cookieSession = require('cookie-session')
const session = require('express-session')
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

//routes
const authRoutes = require('./routes/auth-routes');
const dashboardRoutes = require('./routes/dashboard-routes');
const apiRoutes = require('./routes/api-routes');


var app = express()

//connect to database
mongoose.connect(keys.mongodb.dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.set('view-engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//not sure if we have to use cookieSession at all with express session
app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: [keys.session.cookieKey]
}));

app.use(session({
	secret: keys.session.secretKey,
	resave:false,
	saveUninitialized: false
}))

app.use(flash())

//initiliaze passport
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);
app.use('/dashboard',dashboardRoutes);
app.use(apiRoutes);
app.use(express.static('public'));

app.listen(3000, function(){
	console.log("server listening at port 3000");
})
