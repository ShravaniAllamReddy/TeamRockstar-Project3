
const router = require('express').Router();
const axios = require('axios');


router.get('/:lat/:lon', function (req, res) {
    axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${req.params.lat}&lon=${req.params.lon}`, {
        headers: {
            'user-key': '0e2d135d33f1deb554c243f727ee15f7'
        }
    }).then(function (results) {
        res.json(results.data);
    });
});


module.exports = router;