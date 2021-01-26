import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import RestaurantDetails from '../components/RestaurantDetails';


// hit the API
// Show the restaurants list
class Restaurants extends Component {
    state = {
        restaurantList: []
    }

    //default method when page loads
    componentDidMount() {
        this.fetchRestaurantDetails();
    }

    // handleInputChange = event => {
    //     const { name, value } = event.target;

    //     this.setState({
    //         [name]: value
    //     });
    //     console.log(value);

    // }

    // fetches zomato current location restaurant details
    fetchRestaurantDetails() {
        API.getRestaurantDetails().then(res => {

            this.setState({ restaurantList: res.data });
        });
    }

    render() {
        return (
            <>
                <RestaurantDetails
                    restaurantList={this.state.restaurantList}
                />
            </>
        );
    }
}

export default Restaurants;