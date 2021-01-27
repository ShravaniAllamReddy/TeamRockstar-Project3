import React from 'react';
import FoodOptions from '../Activities/FoodOptions';
import MovieOptions from '../Activities/MovieOptions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
function ActivityResult(props) {
    const classes = useStyles();
    console.log(props.savedActivities);
    return props.savedActivities.length > 0 ? (

        props.savedActivities.map(activity => {
            return (
                <div className="card">
                    <div className="card-body">
                        <div className='text-center' key={activity._id}>
                            <h3 className="font-weight-bold">{activity.name}</h3>

                            <p> {activity.description}</p>
                            <h3>Food Choices</h3>
                            <FoodOptions
                                activity={activity}
                            />
                            <hr />
                            <h3> Movie Choices</h3>
                            <MovieOptions
                                activity={activity}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
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

}

// function refresh() {
//     // make Ajax call here, inside the callback call:
//     setTimeout(refresh, 5000);
//     ActivityResult();
// }

// // initial call, or just call refresh directly
// setTimeout(refresh, 5000);

export default ActivityResult;