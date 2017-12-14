let Notes = require('./../controllers/notes')

module.exports = (app)=>{
	app.get('/notes', Notes.index);
	app.post('/notes', Notes.create);
}
