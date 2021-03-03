import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0, 2),
    },
}));

function About() {
    const classes = useStyles();

    return (
        <Container>
            <CssBaseline />
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
                        <p>What should we eat?</p>
                        <p>What should we watch?</p>
                        <p>Vote the age old question away!</p>
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                
                    </Typography>
                </Container>
            </div>
            <Divider />
        </Container>
    );
}

export default About;