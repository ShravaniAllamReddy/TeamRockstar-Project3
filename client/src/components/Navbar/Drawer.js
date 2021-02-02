import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/auth';
import Container from '@material-ui/core/Container';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    textAlign: {
        display: 'flex',
        justifyContent: 'center',
        marginRight: theme.spacing(6),

    }

}));

export default function PersistentDrawerLeft() {
    const { isLoggedIn, logout, getProfile } = useAuth();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Container>
                        <Typography variant="h5" className={classes.textAlign} >
                        Movie-Night
                        </Typography>
                    </Container>

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <List>
                    <ListItem>
                        Hello {getProfile().email}
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <Link to="/activities">Create Activity</Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <Link to="/savedactivities">Activities</Link>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <Link to="/votes">VoteResults</Link>
                    </ListItem>
                </List>
                <Divider />
                {isLoggedIn() ?
                    <>
                        <List>
                            <ListItem>
                                <Link onClick={() => logout()} to="/">logout</Link>
                            </ListItem>
                        </List>
                    </>
                    :
                    <>
                        <List>
                            <ListItem>
                                <Link to="/signup">Sign up</Link>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem>
                                <Link to="/login">login</Link>
                            </ListItem>
                        </List>
                        <Divider />
                    </>

                }
            </Drawer>
        </div>
    );
}