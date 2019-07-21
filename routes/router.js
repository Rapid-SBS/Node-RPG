const express = require('express');
const router = express.Router();

/* ----- Pages ----- */
router.get('/', (req, res) => {
	res.render('index', { 
		title: 'Home',
		header: 'RPGenius',
		description: 'An online tool for curating a D&D-Lite experience.'
	});
});

router.get('/test', (req, res) => {
	res.render('test', { 
		title: 'Test Page',
		description: 'This is a test-page description'
	});
});

router.get('/info', (req, res) => {
	res.render('info', { 
		title: 'Info Page',
		description: 'This is a info-page description'
	});
});

/* ----- 404 Error ----- */
router.get('*', (req, res) => {
	res.render('404', { 
		title: 'Page Not Found',
		description: 'Error, page not found.'
	});
});

/* ----- Export ----- */
module.exports = router;