const axios = require('axios');
const router = require('express').Router();

router.get('/', function (req, res) {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=51587d1dd63d7e02d1838f41c14a6ee4&language=en-US&page=1')
        .then(function (results) {
            res.json(results.data);
        });
});


module.exports = router;


