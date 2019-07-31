const express = require('express');
const router = express.Router();

/* --- Schemas --- */
const rpgClass = require('../rpgClass.model');
const rpgWeapon = require('../rpgWeapon.model'); 

/* ---------- Pages ---------- */

// ---[ Home Page ]---
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

// ---[ Weapon Select Page ]---
router.get("/weapon-select-:rpgclass", async (req, res) => {
    try {
        var content = await rpgWeapon.find(req.params).sort({index: 1}).exec();
        res.render('weapon-select', { 
					title: 'Weapon Select',
					header: 'Weapon Select',
					contents: content
				});
    } catch (error) {
        res.status(500).send(error);
    }
});


/* ----- Database Test Pages ----- */

// Get all RPG Classes and output as JSON array
router.get("/rpgclasses", async (req, res) => {
    try {
        var result = await rpgClass.find().exec();
        res.send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a single class and output as JSON object
router.get("/rpgclass/:id", async (req, res) => {
    try {
        var result = await rpgClass.findOne(req.params).exec();
        res.send(result);
        console.log(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Example page that pulls all Classes data into template
router.get('/classes', (req, res) => {
	rpgClass.find((err, content) => {
		res.render('classes', { 
			title: 'Classes Page',
			description: 'Outputs MongoDB data into template',
			contents: content
		});
	});
});

/* ----- 404 Error ----- */
router.get('*', (req, res) => {
	res.render('404', { 
		title: 'Page Not Found',
		description: 'Page not found.'
	});
});

/* ----- Export ----- */
module.exports = router;