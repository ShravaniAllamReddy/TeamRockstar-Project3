
import React from 'react';
import { Component } from 'react';
import API from '../utils/API';
import VoteResult from '../components/VoteResult';


// hit the API
// Show the votes 
class Votes extends Component {
    state = {
        savedVotes: [],
    };

    //default method when page loads
    componentDidMount() {
      
        this.fetchVotes();
    }

    //fetch vote details
    fetchVotes = () => {
        API.getVotes().then(res => {
            console.log(res.data);
            this.setState({ savedVotes: res.data });
        });
    }
  
    render() {
        return (
            <>
                <VoteResult
                    savedVotes={this.state.savedVotes}
                     
                />
            </>
        );
    }
}

export default Votes;