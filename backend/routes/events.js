var express = require('express');
var moment = require('moment');
var fs = require('fs');
var router = express.Router();

var database;

fs.readFile( __dirname + '/database.json', function (err, data) {
    if (err) {
        throw err;
    }

    database = JSON.parse(data);
});

/* GET events listing. */
router.get('/', function(req, res) {
    res.json(database);
});

router.route('/asd').post(function(req, res) {
    const newElem = req.body;
    newElem.id = database.length + 1;
    database.push(newElem);
    fs.writeFile(__dirname + '/database.json', JSON.stringify(database));
    res.json(req.body);
});

router.route('/edit').post(function(req, res) {
    let old = database.find((elem) => elem.id == req.body.id);
    old.name = req.body.name;
    old.startDate = req.body.startDate;
    old.endDate = req.body.endDate;
    fs.writeFile(__dirname + '/database.json', JSON.stringify(database));
    res.json(req.body);
});

router.route('/delete').post(function(req, res) {
    let old = database.find((elem) => elem.id == req.body.id);
    let oldIndex = database.indexOf(old);
    if (oldIndex > -1) {
        database.splice(oldIndex, 1);
    }
    fs.writeFile(__dirname + '/database.json', JSON.stringify(database));
    res.json(req.body);
});

module.exports = router;
