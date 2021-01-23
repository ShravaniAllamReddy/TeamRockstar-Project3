import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';


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

// display food and movie options in table format from zomato API and movie API with an option to check from those options (host)
const ActivityForm = (props) => {
    const classes = useStyles();
    const { didSubmit } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [foodOption1, setFoodOption1] = useState('');
    const [foodOption2, setFoodOption2] = useState('');
    const [movieOption1, setMovieOption1] = useState('');
    const [movieOption2, setMovieOption2] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        submitActivity();
    };
    const submitActivity = async () => {
        await axios.post('/api/activities',
            { name: name, description: description, foodOption1: foodOption1, foodOption2: foodOption2, movieOption1: movieOption1, movieOption2: movieOption2 });
        setName('');
        setDescription('');
        setFoodOption1('');
        setFoodOption2('');
        setMovieOption1('');
        setMovieOption2('');
        didSubmit();
    };

    return (
        <Container component="main" >
            <CssBaseline />
            <div className={classes.paper}>
                {/* <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar> */}
                <Typography component="h1" variant="h5">
                    Create Activity
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <br />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        label="description"
                        type="description"
                        id="description"
                        autoComplete="description"
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                    {/* <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="foodOption1"
                        label="foodOption1"
                        name="foodOption1"
                        autoComplete="foodOption1"
                        autoFocus
                        value={foodOption1}
                        onChange={event => setFoodOption1(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="foodOption2"
                        label="foodOption2"
                        name="foodOption2"
                        autoComplete="foodOption2"
                        autoFocus
                        value={foodOption2}
                        onChange={event => setFoodOption2(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="movieOption1"
                        label="movieOption1"
                        name="movieOption1"
                        autoComplete="movieOption1"
                        autoFocus
                        value={movieOption1}
                        onChange={event => setMovieOption1(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="movieOption2"
                        label="movieOption2"
                        name="movieOption2"
                        autoComplete="movieOption2"
                        autoFocus
                        value={movieOption2}
                        onChange={event => setMovieOption2(event.target.value)}
                    /> */}
                    < DataTable />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>

                    {/* <Grid container>
                        <Grid item xs>
                        </Grid>
                    </Grid> */}
                </form>


            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
};


export default ActivityForm;