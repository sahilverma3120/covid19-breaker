var express 	= require("express"),
 	app 		= express(),
 	bp 			= require("body-parser"),
 	mongoose 	= require("mongoose"),
	path = require('path'),
	cors = require('cors');
	require('dotenv/config');

app.use(cors());
app.use(bp.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(__dirname+'/public'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

// Mongo DB
mongoose.connect(process.env.DB_CONNECTION,
{
	useNewUrlParser: true,
	useCreateIndex:true,
	useUnifiedTopology: true,
	useFindAndModify: false
}).then(() => {console.log("Connected to database");}).catch(err => {console.log("error: ");console.log(err);})


//IMPORT ROUTE
const apiRoute = require("./public/routes/api");
//MIDDLEWARE
app.use("/api", apiRoute);
app.get("/", function(req, res){
	res.render("landing");
})
app.get("/chat", function(req, res){
	res.render("chatbot");
})




app.listen(process.env.PORT || 3000, function(){
	console.log("Server Started!!!");
})




















// Mongo DB
// mongoose.connect("mongodb+srv://admin:*8aauro8a@cluster0-mfh4b.mongodb.net/test?retryWrites=true&w=majority",
// {
// 	useNewUrlParser: true,
// 	useCreateIndex:true,
// 	useUnifiedTopology: true,
// 	useFindAndModify: false
// }).then(() => {console.log("Connected to database");}).catch(err => {console.log("error: ");console.log(err);})

// var UserSchema = new mongoose.Schema({
// 	name: String,
// })

// var User = mongoose.model("User", UserSchema);

// // User.create({name:"test", score:"50"}, (err, data) => {if(err){console.log("error: ");console.log(err);}else{console.log("data added");}});

// var GameSchema = new mongoose.Schema({
// 	name: String,
// 	leaderboard: [{
// 					name: String,
// 					score: String
// 				}]
// });

// var Game = mongoose.model("Game", GameSchema);

// // Game.create({name:"blitzkrieg", leaderboard: []}, (err, data) => {if(err){console.log("error: ");console.log(err);}else{console.log("data added");}});

// app.get("/", function(req, res){
// 	res.render("index");
// })

// app.get("/:game/leaderboard", function(req, res){
// 	// User.find({},
// 	// 	(err, data) => {if(err){console.log("error: ");console.log(err);}
// 	// 					else{
// 	// 						res.render("leaderboard", {players:data});
// 	// 					}});
	
	
	
// 	Game.findOne({name:req.params.game}, {}, {$sort:{"leaderboard.score":-1}},
// 		(err, data) => {if(err){console.log("error: ");console.log(err);}
// 						else{
// 							res.render("leaderboard", {players:data});
// 						}});
	
	

