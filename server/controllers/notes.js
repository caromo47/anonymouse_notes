let mongoose = require('mongoose');
let Note = mongoose.model('Note')

module.exports = {
	index: (req,res)=>{
		console.log("hit notes.index");
		Note.find().exec((err,notes)=>{
			err ? (
				console.log("something went wrong"),
				res.json(err)
			) : (
				console.log("gottem"),
				res.json(notes)
			);
		})
	},
	create: (req, res)=>{
		console.log("hit notes.create");
		Note.create(req.body, (err,createdNote)=>{
			err ? (
				console.log("something went wrong"),
				res.json(err)
			) : (
				console.log("gottem"),
				res.json(createdNote)
			);
		})
	}
}
