const express = require('express');
const router = express.Router();

/* --- Schemas --- */
const rpgClass = require('../rpgClass.model'); 

/* ----- Pages ----- */
router.get('/', (req, res) => {
	rpgClass.find((err, content) => {
		res.render('index', { 
			title: 'Home',
			header: 'RPGenius',
			description: 'An online tool for curating a D&D-Lite experience.',
			contents: content
		});
	});
});

router.get('/weapon-select', (req, res) => {
	res.render('weapon-select', { 
		title: 'Weapon Select',
		header: 'Weapon Select'
	});
});

/* --- Get all RPG Classes and output as JSON array --- */
router.get("/rpgclasses", async (req, res) => {
    try {
        var result = await rpgClass.find().exec();
        res.send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

/* --- Get a single class and output as JSON object --- */
router.get("/rpgclass/:id", async (req, res) => {
    try {
        var result = await rpgClass.findOne(req.params).exec();
        res.send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

/* --- Example page that pulls all Classes data into template --- */
router.get('/classes', (req, res) => {
	rpgClass.find((err, content) => {
		res.render('classes', { 
			title: 'Classes Page',
			description: 'Outputs MongoDB data into template',
			contents: content
		});
	});
});

/* Old method to get all RPG Classes
router.get('/rpgclasses', function(req, res){
	console.log('Getting all classes');
	rpgClass.find({})
		.exec(function(err, rpgclasses){
			if (err){
				res.send('an error has occurred');
			} else {
				console.log(rpgclasses);
				res.json(rpgclasses);
			}
		});
}); */

/* ----- 404 Error ----- */
router.get('*', (req, res) => {
	res.render('404', { 
		title: 'Page Not Found',
		description: 'Page not found.'
	});
});

/* ----- Export ----- */
module.exports = router;