var express = require('express');
var router = express.Router();
var contacts = require('../contact.json');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact', contactme: contacts });
});

module.exports = router;
