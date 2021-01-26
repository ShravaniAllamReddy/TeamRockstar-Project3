import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import ActivityResult from '../components/Activity/ActivityResult';


// hit the API
// Show the activities list
class SavedActivity extends Component {
    state = {
        savedActivities: [],  
    };

    //default method when page loads
    componentDidMount() {
        this.fetchActivityDetails();
    }

    // fetches activity details
    fetchActivityDetails() {
        API.getActivities().then(res => {

            this.setState({ savedActivities: res.data });
        });
    }

    render() {
        return (
            <>
                <ActivityResult
                    savedActivities={this.state.savedActivities}
                />       
            </>
        );
    }
}

export default SavedActivity;