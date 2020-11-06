var express = require('express');
var app = express();
let actS = require('./activities.json');
let logs = require('./clubUsersHash.json');
const schema = require('./clubUsersSchema.json');
const session = require('express-session');
const bcrypt = require('bcryptjs');
app.use(express.static('public')); 
var Ajv = require('ajv');
const DataStore = require('nedb-promises');
const db = new DataStore({filename: __dirname + '/actsDB', autoload: true});
const db1 = new DataStore({filename: __dirname + '/logsDB', autoload: true});

const cookieName = "VE3568";
app.use(session({
    secret: 'Homework 9 by Prachi',
    resave: false,
    saveUninitialized: false,
    name: cookieName 
}));

const setUpSessionMiddleware = function (req, res, next) {
       if (!req.session.user) {
        req.session.user = {role: "guest"};
    };
    next();
};

app.use(setUpSessionMiddleware);


app.get('/activities', function (req, res) {
		db.find({}).then(function (docs) {
			res.json(docs);
		})
		.catch(function(err){
			console.log(`something is wrong`);
		});
	});	

function checkAdminMiddleware(req, res, next) {
	if (req.session.user.role !== "admin")
	{
		res.status(401).json({error: "Not permitted"});;
	} 
	else
	{
		next();
	}
};

app.get('/users', checkAdminMiddleware, express.json(), function (req, res){
	db1.find({}).then(function (docs) {
			let userData=docs;
			delete userData.password;
			res.json(userData);
		})
		.catch(function(err){
			console.log(`something is wrong`);
		});
	});	

app.post('/activities/addActs', checkAdminMiddleware, express.json({limit: '10kb'}), function(req, res) {
	db.insert(req.body).then(function(docs){
		db.find({}).then(function(docs) {
				res.json(docs);
			})
			.catch(function(err){
				console.log(`Something is wrong`);
			});
		})
		.catch(function(err){
			console.log(`Something is wrong`);
		});
});

app.post('/login', express.json(), function(req, res) {
	let auser = logs.find(function (log)
	{
		return log.email === req.body.email
	});
	if (!auser)
	{
		res.status(401).json({error: true, message: "user/Password error"});
		return;
	}
	let verified = bcrypt.compareSync(req.body.password, auser.password);
	if (verified) 
	{
		let prevUser = req.session.user;
		req.session.regenerate(function (err)
		{
			if (err) 
			{
				console.log(err);
			}
		let newUser = Object.assign(prevUser, auser);
		delete newUser.password;
		req.session.user = newUser;
		res.json(newUser);
		});
	}
	else 
	{
		return res.status(401).json({error: true, message: "user/Password error"});
	}
});

app.post('/appicants', express.json(), function(req, res){
	var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
	var valid = ajv.validate(schema,req.body);
	if (!valid) 
	{
		res.json({error: true, message: ajv.errors});
		return;
	}
	else 
	{
		res.json({message:"received your application"});
	}
});

app.get('/logout', function (req, res) {
	let options = req.session.cookie;
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		res.clearCookie(cookieName, options); 
		res.json({message: "Loged out!"});
	})
});

app.delete('/activities/:id', function (req, res) {
	db.remove({_id:req.params.id}).then(function (docs) {
			db.find({}).then(function(docs) {
					res.json(docs);
				})
				.catch(function(err){
					console.log(`something is wrong`);
				});
			})
			.catch(function(err){
				console.log(`something is wrong`);
			});
});

host = '127.24.31.15';
port = '3125';

app.listen(port, host, function () {
    console.log(`ActivityServer app listening on IPv4: ${host}:${port}`);
});






