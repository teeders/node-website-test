var express = require('express');
var router = express.Router();
var game = require ('../gamedata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('games', { title: 'Games', gamedata: game });
});

module.exports = router;
