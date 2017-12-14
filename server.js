let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public', 'dist')));

require('./server/config/mongoose');

let routes_setter = require('./server/config/routes');
routes_setter(app);

app.listen(4200, ()=>{
	console.log('listening on port 4200');
});
