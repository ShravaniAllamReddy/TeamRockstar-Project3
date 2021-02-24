import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import DeleteBtn from '../components/DeleteBtn';
import Container from '@material-ui/core/Container';
import API from '../utils/API';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        fontSize: 23
    },
}));
export default function SavedActivities() {
    const classes = useStyles();
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetchActivities();
    }, []);

    function fetchActivities() {
        API.getActivities()
            .then(res =>
                setActivities(res.data)
            )
            .catch(err => console.log(err));
    }
    // Deletes a Activity from the database with a given id, then reloads Activities from the db
    function deleteActivity(id) {
        API.deleteActivity(id)
            .then(res => fetchActivities())
            .catch(err => console.log(err));
    }
    return (

        <Container className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Activities List</Paper>
            </Grid>

            {activities.length ? (
                <List>
                    {activities.map(activity => (
                        <ListItem key={activity._id}>
                            <Link to={'/activities/' + activity._id}>
                                <strong>
                                    <h2>{activity.name} </h2>
                                </strong>
                            </Link>
                            <DeleteBtn onClick={() => deleteActivity(activity._id)} />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <h3>No Results to Display</h3>
            )}

        </Container>

    );
}