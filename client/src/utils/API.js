import axios from 'axios';

const API = {
    getRestaurantDetails: function (lat, lon) {
        return axios.get('/api/restaurants/' + lat + '/' + lon);
    },
    getActivities: function () {
        return axios.get('/api/activities/');
    },
    saveActivity: function (activityData) {
        return axios.post('/api/activities/', activityData);
    },
    getMovieDetails: function(){
        return axios.get('/api/movies');
    },
  
};

export default API;