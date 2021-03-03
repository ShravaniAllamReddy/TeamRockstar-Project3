import React from 'react';
import FoodOptions from './FoodOptions';
import MovieOptions from './MovieOptions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../utils/API';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


function SimpleDialog(props) {

    const { onClose, open } = props;
    const handleClose = () => {
        onClose();
    };
    return (
        <Dialog onClose={handleClose} open={open} fullWidth 
            maxWidth="sm" 
            PaperProps={{
                style: {
                    height:'10%'
                
                },
            }} >
            <DialogContent>Your choice is being posted</DialogContent>
        </Dialog>
    );
}
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
function ActivityResult(props) {
    const classes = useStyles();
    const [activity, setActivity] = useState({});
    const [foodVoted, setFoodVoted] = useState('');
    const [movieVoted, setMovieVoted] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);

    };
    // When this component mounts, grab the activity with the _id of props.match.params.id
    // e.g. localhost:3000/activities/activityId
    const { id } = useParams();
    useEffect(() => {
        API.getActivityById(id)
            .then(res => setActivity(res.data))
            .catch(err => console.log(err));
    });

    // to post the votes
    const handleSubmit = (event) => {
        event.preventDefault();
        submitVotes();
    };

    const submitVotes = async () => {

        await axios.post(
            '/api/votes',
            {
                activity: activity,
                foodVoted: foodVoted,
                movieVoted: movieVoted,
            }
        );
    };

    return (
        <Container>
            <div className="card">
                <div className="card-body">

                    <div className='text-center' key={activity._id}>

                        <h3 className="font-weight-bold">{activity.name}</h3>

                        <p> {activity.description}</p>
                        <Typography component="h5" variant="h6">
                            Near By Restaurants
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <FoodOptions
                                activity={activity}
                                setFoodVoted={setFoodVoted}
                                foodVoted={foodVoted}
                            />
                            <hr />
                            <Typography component="h5" variant="h6">
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
                                onClick={handleClickOpen}
                            >
                            Submit
                            </Button>
                            <SimpleDialog open={open} onClose={handleClose}/>
                        </form>

                    </div>

                </div>

            </div>

            <Link to="/savedactivities">← Back to Activities</Link>
        </Container>
    );
}


export default ActivityResult;