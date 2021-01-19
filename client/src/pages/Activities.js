import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import ActivityForm from '../components/ActivityForm';


// hit the API
// Show the activities list
class Activity extends Component {
    state = {
        activitiesList: []
    }

    //default method when page loads
    componentDidMount() {
        this.fetchActivityDetails();
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
        console.log(value);

    }

    // fetches activity details
    fetchActivityDetails() {
        API.getActivities().then(res => {

            this.setState({ activitiesList: res.data });
        });
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <ActivityForm
                            handleInputChange={this.handleInputChange}
                            activity={this.state.activitiesList}
                        />
                    </div>
                </div>

            </>
        );
    }
}

export default Activity;