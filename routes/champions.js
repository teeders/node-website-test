var express = require('express');
var router = express.Router();
var champ = require('../championdata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('champions', { title: 'Champions', championdata: champ });
});

module.exports = router;
