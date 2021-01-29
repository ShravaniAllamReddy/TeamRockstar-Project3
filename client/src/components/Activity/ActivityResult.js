import React from 'react';
import FoodOptions from '../Food/FoodOptions';
import MovieOptions from '../Movie/MovieOptions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
// import API from '../../utils/API';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
// this is where we display food and movie options in cards so that user can vote from those choices ( invited users) food options from zomato api checkbox
const ActivityResult = (props) => {
    const classes = useStyles();
    const [foodVoted, setFoodVoted] = useState('');
    const [movieVoted, setMovieVoted] = useState('');

    // console.log(props.savedActivities);
    const handleSubmit = (event) => {
        event.preventDefault();
        submitVotes();
    };

    const submitVotes = async () => {

        console.log('hello'); 
        await axios.post(
            '/api/activities',
            {
                foodVoted: foodVoted,
                movieVoted: movieVoted,
            }
        );
    };

    return props.savedActivities.length > 0 ? (

        props.savedActivities.map(activity => {
            return (
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
                                setFoodVoted ={setFoodVoted}
                            />
                            <hr />
                            <Typography component="h1" variant="h5">
                                Popular Movies on 'The Movie DB'
                            </Typography>
                            <MovieOptions
                                activity={activity}
                                setMovieVoted ={ setMovieVoted}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>

                        </div>
                    </div>
                </div>
            );
        }
        )

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