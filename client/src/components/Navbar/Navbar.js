import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SimpleMenu from './Menu';
// import { Link } from 'react-router-dom';
// import useAuth from '../hooks/auth';


const NavBar = () => {
    // const { isLoggedIn, logout, getProfile } = useAuth();


    return (
        <AppBar position="sticky">
            <Toolbar>
                <SimpleMenu />
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;