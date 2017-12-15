var express = require('express');
var router = express.Router();

/* GET age page. */
router.get('/', function(req, res, next) {
    res.render('age', { title: 'Age JavaScript Example' });
});

module.exports = router;
