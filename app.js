const express = require('express');
const exphbs = require('express-handlebars');
const mongo = require('mongodb').MongoClient;
const fs = require('fs');
const path = require('path');
const url = require('url');

const app = express();
const port = 8000;

app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Routing
app.get('/', (req, res) => {
	res.render('index');
});

/* 
app.get('/', (req, res, next) => {
	res.send('Hello! The time and date is: ' + new Date());
});

app.get('/json', (req, res, next) => {
	const data = {
		key: 'Value'
	}

	res.json(data);
})
*/
// -----------------

app.listen(port, function(err, res) {
	if (err) {
		console.log('A startup error has occurred!');
	} else {
		console.log('Server started on port ' + port + ' on ' + new Date());
	}
});

