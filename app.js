var express = require('express');
var app = express();
var port = 8000;

app.listen(port, function(err, res) {
	if (err) {
		console.log('A startup error has occurred!');
	} else {
		let date_ob = new Date();
		let date = ("0" + date_ob.getDate()).slice(-2);
		let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
		let year = date_ob.getFullYear();
		let hours = date_ob.getHours();
		let minutes = date_ob.getMinutes();
		let seconds = date_ob.getSeconds();

		console.log('Server started on port ' + port + ' at ' + hours + ":" + minutes + ":" + seconds + " on " + month + "-" + date + "-" + year + ".");
	}
});

