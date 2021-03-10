var mongoose 	= require("mongoose");

var PatientSchema = new mongoose.Schema({
	patientId:String,
	reportedOn:String,
	onsetEstimate:String,
	ageEstimate:String,
	gender:String,
	city:String,
	district:String,
	state:String,
	status:String,
	notes:String,
	contractedFrom:String
})

var Patient = mongoose.model("Patient", PatientSchema);

// const csv = require('csv-parser');
// const fs = require('fs');

// fs.createReadStream('./public/Models/covid19india.csv')
//   .pipe(csv())
//   .on('data', (row) => {
// 	// Patient.create(row, 
// 	// (err, data) => {if(err){console.log("error: ");console.log(err);}else{console.log("data added");}});
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });












module.exports = mongoose.model("Patient", PatientSchema);

