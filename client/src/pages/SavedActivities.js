import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Container from '@material-ui/core/Container';
import API from '../utils/API';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import { List, ListItem } from '../components/List';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, List } from 'semantic-ui-react';

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
    delete: {
        color: '#e74944',
    }
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
                <List divided verticalAlign='middle'>
                    {activities.map(activity => (
                        <List.Item key={activity._id}>

                            <Link className={classes.paper} to={'/activities/' + activity._id}>

                                {activity.name}

                            </Link>
                            <List.Content floated='right'>
                                <Button negative onClick={() => deleteActivity(activity._id)}>  Delete </Button>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
            ) : (
                <h3>No Results to Display</h3>
            )}

        </Container>

    );
}

// <List divided verticalAlign='middle'>
// <List.Item>
//   <List.Content floated='right'>
//     <Button>Add</Button>
//   </List.Content>
//   <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
//   <List.Content>Lena</List.Content>
// </List.Item>