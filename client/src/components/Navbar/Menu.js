import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/activities">Activities</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/restaurants">Restaurants</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/signup">Sign up</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/login">login</Link></MenuItem>
            </Menu>
        </div>
    );
}