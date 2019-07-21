const express = require('express');
const exphbs = require('express-handlebars');
const mongo = require('mongodb').MongoClient;
const fs = require('fs');
const path = require('path');
const url = require('url');

const app = express();
const port = 8000;

app.use(express.static('public'));

app.engine('.hbs', exphbs({ 
	defaultLayout: 'main',
	extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'))

// ----- Routing -----
app.get('/', (req, res) => {
	res.render('index', { 
		title: 'Home',
		header: 'RPGenius',
		description: 'An online tool for curating a D&D-Lite experience.'
	});
});

app.get('/test', (req, res) => {
	res.render('test', { 
		title: 'Test Page',
		description: 'This is a test-page description'
	});
});
// ------------------

app.listen(port, function(err, res) {
	if (err) {
		console.log('A startup error has occurred!');
	} else {
		console.log('Server started on port ' + port + ' on ' + new Date());
	}
});

