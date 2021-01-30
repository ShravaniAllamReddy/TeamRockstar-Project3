import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import ActivityResult from '../components/Activity/ActivityResult';


// hit the API
// Show the activities list
class SavedActivity extends Component {
    state = {
        savedActivities: [],  
        currentActivity: ''
    };

    //default method when page loads
    componentDidMount() {
        // const params = new URLSearchParams(this.props.location.search);
        // console.log(params);
        console.log(this.props);
        this.setState({currentActivity: this.props.location.search.substring(1)});
       
        console.log(this.state.currentActivity);
        API.getActivityById(this.props.location.search.substring(1)).then(res=> {

            this.setState({savedActivities : res.data});
        });
    }

    render() {
        return (
            <>
                <ActivityResult
                    savedActivities={this.state.savedActivities}
                    currentActivity={this.state.currentActivity}
                />       
            </>
        );
    }
}

export default SavedActivity;