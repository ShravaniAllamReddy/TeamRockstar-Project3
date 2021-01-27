import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import SimpleMenu from './Menu';
import Drawer from './Drawer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
// import useAuth from '../hooks/auth';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));


const NavBar = () => {
    // const { isLoggedIn, logout, getProfile } = useAuth();
    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Drawer />
                <Typography variant="h6" className={classes.title}>
                    Event Planner
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;