import React from 'react';
import FoodOptions from '../Food/FoodOptions';
import MovieOptions from '../Movie/MovieOptions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    delete: {
        margin: theme.spacing(3, 1, 2),
    }
}));
// this is where we display food and movie options in cards so that user can vote from those choices ( invited users) food options from zomato api checkbox
const ActivityResult = (props) => {
    const classes = useStyles();
    const [foodVoted, setFoodVoted] = useState('');
    const [movieVoted, setMovieVoted] = useState('');

    // to post the votes
    const handleSubmit = (event) => {
        event.preventDefault();
        submitVotes();
    };

    const submitVotes = async () => {

        console.log('hello');
        await axios.post(
            '/api/votes',
            {
                activity: props.currentActivity,
                foodVoted: foodVoted,
                movieVoted: movieVoted,
            }
        );
    };

    const activity = props.savedActivities;

    return activity.hasOwnProperty('_id') ? (

        <div className="card">
            <div className="card-body">
                <div className='text-center' key={activity._id}>

                    <h3 className="font-weight-bold">{activity.name}</h3>

                    <p> {activity.description}</p>
                    <Typography component="h1" variant="h5">
                        Near By Restaurants
                    </Typography>
                    <FoodOptions
                        activity={activity}
                        setFoodVoted={setFoodVoted}
                        foodVoted={foodVoted}
                    />
                    <hr />
                    <Typography component="h1" variant="h5">
                        Popular Movies on 'The Movie DB'
                    </Typography>
                    <MovieOptions
                        activity={activity}
                        setMovieVoted={setMovieVoted}
                        movieVoted={movieVoted}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.delete}
                        onClick={props.handleDelete}
                    >
                        Delete
                    </Button>

                </div>
            </div>
        </div>

    ) : (
        <h3>No activities to display</h3>
    );

};
// function refresh() {
//     // make Ajax call here, inside the callback call:
//     setTimeout(refresh, 5000);
//     ActivityResult();
// }

// // initial call, or just call refresh directly
// setTimeout(refresh, 5000);

export default ActivityResult;