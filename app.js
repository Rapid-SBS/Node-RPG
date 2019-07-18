var express = require('express');
var app = express();
var port = 8000;

app.listen(port, function(err, res) {
	if (err) {
		console.log('A startup error has occurred!');
	} else {
		console.log('Server started on port ' + port + ' on ' + new Date());
	}
});

