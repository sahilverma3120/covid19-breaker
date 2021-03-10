var express 	= require("express");
const router = express.Router();
const patient = require("../Models/covid");

router.get("/deceased", async function(req, res){
	const result = await patient.find(req.query).limit(5000);
	res.send(result);
})
router.get('/docs',function(req,res){
	res.render("apidocs");
})
router.get('/data',function(req,res){
	res.render("graphapi");
})
router.get('*',function(req,res){
	res.send("Please check your url!!!");
})
router.post("/", function(req, res){
	
})

module.exports = router;