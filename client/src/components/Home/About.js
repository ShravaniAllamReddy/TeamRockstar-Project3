import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
}));

function About() {
    const classes = useStyles();

    return (
        <Container>
            <CssBaseline />
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Event Planner
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                
                    </Typography>
                </Container>
            </div>
            
        </Container>
    );
}

export default About;