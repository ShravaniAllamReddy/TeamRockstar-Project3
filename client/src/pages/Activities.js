import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import ActivityForm from '../components/Activity/ActivityForm';

// hit the API
// Show the activities list
class Activity extends Component {
    state = {
        restaurantList: [],
        movieList: []
    };

    //default method when page loads
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                API.getRestaurantDetails(lat, lon).then(res => {
                    const result = res.data.nearby_restaurants.map((result) => {
                        result = {
                            id: result.restaurant.id,
                            name: result.restaurant.name,
                            link: result.restaurant.url,
                            image: result.restaurant.thumb,
                            menu: result.restaurant.menu_url
                        };
                        return result;
                    });
                    this.setState({ restaurantList: result });
                });
                this.fetchMovieDetails();
            });
        }
    }

    fetchMovieDetails() {
        API.getMovieDetails().then(res => {
            const result = res.data.results.map((result) => {
                result = {

                    id: result.id,
                    title: result.title,
    
                };
                return result;
            });
            this.setState({ movieList: result });
        });
    }

    render() {
        return (
            <>
                <ActivityForm
                    restaurantList={this.state.restaurantList}
                    movieList={this.state.movieList}
                />
            </>
        );
    }
}

export default Activity;