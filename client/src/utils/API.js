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
    deleteActivityById: function (id) {
        return axios.delete('/api/activities/'+ id );
    },
    getMovieDetails: function(){
        return axios.get('/api/movies');
    },
    getVotes: function(){
        return axios.get('/api/votes');
    }

  
};

export default API;