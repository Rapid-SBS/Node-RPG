const express = require('express');
const exphbs = require('express-handlebars');
const mongo = require('mongodb').MongoClient;
const fs = require('fs');
const path = require('path');
const url = require('url');

const app = express();
const port = 8000;

app.engine('handlebars', exphbs({ 
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'views/pagelayouts')
}));

app.set('view engine', 'handlebars');
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

app.get('/helpers', (req, res) => {
	res.render('helpers', { 
		title: 'Helpers',
		description: 'A list of Handlebar Helpers for conditional logic.',
		ifval: true,
		unlessval: false,
		eacharray: [
			"Array Item One",
			"Array Item Two",
			"Array Item Three"
		],
		eachobject: {
			keyone: "Value 1",
			keytwo: "Value 2",
			keythree: "Value 3"
		},
		arrayofobjects: [
			{
				fruits: ['Mango', 'Peach', 'Banana']
			},
			{
				fruits: ['Apple', 'Orange', 'Strawberry']
			}
		]	
	});
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

