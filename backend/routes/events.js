var express = require('express');
var moment = require('moment');
var router = express.Router();

/* GET events listing. */
router.get('/', function(req, res, next) {
    res.json([{
        id: 1,
        name: "asd",
        startDate: moment(),
        endDate: moment(),
    }, {
        id: 2,
        name: "qwe",
        startDate: moment().add(1, 'day'),
        endDate: moment().add(1, 'day'),
    }]);
});

module.exports = router;
