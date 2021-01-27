const axios = require('axios');
const router = require('express').Router();

router.get('/', function (req, res) {
    axios.get('https://streaming-availability.p.rapidapi.com/search/basic', {
        params: {
            country: 'us',
            service: 'netflix',
            type: 'movie',
            page: '2',
            language: 'en'
        },
        headers: {
            'x-rapidapi-key': '88a7dc4349msh2d7c34685f472fcp177f8djsnd3843a56dfff',
            'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
    }).then(function (results) {
        res.json(results.data);
    });
});
module.exports = router;


