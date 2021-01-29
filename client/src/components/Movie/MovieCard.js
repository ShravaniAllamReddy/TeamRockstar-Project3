import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: 300,
    },
    content: {
        flex: '1 0 auto',
    },
    inline: {
        display: 'inline',
    },
    cover: {
        width: 100,
    }
}));

export default function MovieCard(props) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.cover}
                image="https://images.pexels.com/photos/987586/pexels-photo-987586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title=""
            />

            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {props.title}
                </Typography>

            </CardContent>

        </Card>
    );
}