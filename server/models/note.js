let mongoose = require('mongoose');

let NoteSchema = mongoose.Schema({
	note: {type:String, require: true},
	time: {type: Date}
});

mongoose.model('Note', NoteSchema);
