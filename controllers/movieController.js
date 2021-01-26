const axios = require('axios');
const router = require('express').Router();

router.get('/', function (req, res) {
    axios.get('https://streaming-availability.p.rapidapi.com/search/basic', {
        params: {
            country: 'us',
            service: 'netflix',
            type: 'movie',
            page: '1',
            language: 'en'
        },
        headers: {
            'x-rapidapi-key': '83035e9b67msh7a0cc4a0cdd928cp10a875jsn84fb894d7e13',
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
    }).then(function (results) {
        res.json(results.data);
    });
});
module.exports = router;


