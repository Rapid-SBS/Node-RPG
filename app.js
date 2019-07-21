/* --- Includes --- */
const express = require('express');
const exphbs = require('express-handlebars');
const mongo = require('mongodb').MongoClient;
const fs = require('fs');
const path = require('path');
const url = require('url');
const port = 8000;

/* --- Express Framework --- */
const app = express();
app.use(express.static('public'));

/* --- Express-Handlebars --- */
app.set('view engine', '.hbs');
app.engine('.hbs', exphbs({ 
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials'),
	extname: '.hbs'
}));

/* --- Router --- */
const routerIndex = require('./routes/router');
app.use('/', routerIndex);

/* --- Start Server --- */
app.listen(port, function(err, res) {
	if (err) {
		console.log('A startup error has occurred!');
	} else {
		console.log('Server started on port ' + port + ' on ' + new Date());
	}
});

