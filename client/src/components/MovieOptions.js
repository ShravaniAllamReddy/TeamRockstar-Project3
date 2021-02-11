import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MovieCard from './MovieCard';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
});

// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

export default function MovieOptions(props) {
    const {movieOption1, movieOption2, movieOption3, movieOption4} = props.activity;

    const handleChange = (event) => {
        props.setMovieVoted(event.target.value);
    };
    return (
        <Container>
            <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="customized-radios" value={props.movieVoted} onChange={handleChange}>
                    <FormControlLabel value={movieOption1} control={<StyledRadio />} label={<MovieCard title={movieOption1} />}/>
                   
                    <FormControlLabel value={movieOption2} control={<StyledRadio />} label={<MovieCard title={movieOption2} />}/>
                   
                    <FormControlLabel value={movieOption3} control={<StyledRadio />} label={<MovieCard title={movieOption3} />}/>
                    
                    <FormControlLabel value={movieOption4} control={<StyledRadio />} label={<MovieCard title={movieOption4} />}/>
                </RadioGroup>
            </FormControl>
        </Container>
    );
}