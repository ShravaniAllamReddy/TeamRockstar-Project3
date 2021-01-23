const axios = require('axios');
const router = require('express').Router();

router.get('/', function (req, res) {
    axios.get('http://www.omdbapi.com/?apikey=4c240613&t=shrek').then(function (results) {
        res.json(results.data);
    });
});

module.exports = router;