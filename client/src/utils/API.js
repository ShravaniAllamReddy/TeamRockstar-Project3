import axios from 'axios';

const API = {
    getRestaurantDetails: function (lat, lon) {
        return axios.get('/api/restaurants/' + lat + '/' + lon);
    },
    getActivities: function () {
        return axios.get('/api/activities');
    },
    getActivityById: function (id) {
        return axios.get('/api/activities/getone/'+ id );
    },
    saveActivity: function (activityData) {
        return axios.post('/api/activities/', activityData);
    },
    getMovieDetails: function(){
        return axios.get('/api/movies');
    },
    saveVotes: function(voteData){
        return axios.post('/api/votes', voteData);
    }
  
};

export default API;