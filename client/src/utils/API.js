import axios from 'axios';

const API = {
    getRestaurantDetails: function () {
        return axios.get('/api/restaurants/40.8577875/-111.93169089999999');
    },
    getActivities: function () {
        return axios.get('/api/activities/');
    }  
};

export default API;