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
import FoodDataTable from './FoodDataTable';
import MovieDataTable from './MovieDataTable';

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
    const { restaurantList, movieList } = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [foodOption, setFoodOption] = useState([]);
    const [movieOption, setMovieOption] = useState([]);

    console.log(restaurantList);
    console.log(movieList);
    const handleSubmit = (event) => {
        event.preventDefault();
        submitActivity();
    };

    const submitActivity = async () => {
        let foodOption1 = '',
            foodOption2 = '',
            foodOption3 = '',
            foodOption4 = '';
        let movieOption1 = '',
            movieOption2 = '',
            movieOption3 = '',
            movieOption4 = '';

        if (foodOption.length <= 4) {
            foodOption1 = foodOption[0];
            foodOption2 = foodOption[1];
            foodOption3 = foodOption[2];
            foodOption4 = foodOption[3];
        }

        if (movieOption.length <= 4) {
            movieOption1 = movieOption[0];
            movieOption2 = movieOption[1];
            movieOption3 = movieOption[2];
            movieOption4 = movieOption[3];
        }
        console.log( {
            name: name,
            description: description,
            foodOption1: foodOption1,
            foodOption2: foodOption2,
            foodOption3: foodOption3,
            foodOption4: foodOption4,
            movieOption1: movieOption1,
            movieOption2: movieOption2,
            movieOption3: movieOption3,
            movieOption4: movieOption4,
        });
        await axios.post(
            '/api/activities',
         
            {
                name: name,
                description: description,
                foodOption1: foodOption1,
                foodOption2: foodOption2,
                foodOption3: foodOption3,
                foodOption4: foodOption4,
                movieOption1: movieOption1,
                movieOption2: movieOption2,
                movieOption3: movieOption3,
                movieOption4: movieOption4,
            }
        );
        setName('');
        setDescription('');
    };

    const setFoods = (food) => {
        setFoodOption([...foodOption, food]);
    };

    const setMovies = (movie) => {
        setMovieOption([...movieOption, movie]);
    };

    const removeFoods = (food) => {
        const filteredFoods = foodOption.filter((item) => item !== food);
        setFoodOption(filteredFoods);
    };

    const removeMovies = (movie) => {
        const filteredMovies = movieOption.filter((item) => item !== movie);
        setMovieOption(filteredMovies);
    };


    return (
        <Container component="main">
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
                        onChange={(event) => setName(event.target.value)}
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
                        onChange={(event) => setDescription(event.target.value)}
                    />

                    <FoodDataTable
                        restaurantList={restaurantList}
                        setFoods={setFoods}
                        removeFoods={removeFoods}
                    />
                    <MovieDataTable
                        movieList={movieList}
                        setMovies={setMovies}
                        removeMovies={removeMovies}
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
                </form>
            </div>
            <Box mt={8}></Box>
        </Container>
    );
};

export default ActivityForm;
