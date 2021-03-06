import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FoodCard from './FoodCard';
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

export default function FoodOptions(props) {
    const { foodOption1, foodOption2, foodOption3, foodOption4 } = props.activity;

    const handleChange = (event) => {
        props.setFoodVoted(event.target.value);
    };
    return (
        <Container>
            <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="customized-radios" value={props.foodVoted}
                    onChange={handleChange}>

                    <FormControlLabel value={foodOption1} control={<StyledRadio />} label={<FoodCard title={foodOption1} />} />

                    <FormControlLabel value={foodOption2} control={<StyledRadio />} label={<FoodCard title={foodOption2} />} />

                    <FormControlLabel value={foodOption3} control={<StyledRadio />} label={<FoodCard title={foodOption3} />} />

                    <FormControlLabel value={foodOption4} control={<StyledRadio />} label={<FoodCard title={foodOption4} />} />
                </RadioGroup>
            </FormControl>
        </Container>
    );
}