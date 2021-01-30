import React from 'react';
import Typography from '@material-ui/core/Typography';


//to display voteresults
const VoteResult = (props) => {


    return props.savedVotes.length > 0 ? (

        <div className="card">
            <div className="card-body">
                {props.savedVotes.map((vote) => {
                    return (
                        <div className="card">
                            <div className="card-body">
                                <div className='text-center' key={vote._id}>

                                    <h3 className="font-weight-bold">{vote.user.email}:</h3>

                                    <Typography component="h1" variant="h5">
                                       FoodVoted: {vote.foodVoted}
                                    </Typography>

                                    <Typography component="h1" variant="h5">
                                    MovieVoted:{vote.movieVoted}
                                    </Typography>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    ) : (
        <h3>No Votes to display</h3>
    );

};


export default VoteResult;