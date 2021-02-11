import About from '../components/About';
import Instructions from '../components/Instructions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    layout: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));


function Home() {
    const classes = useStyles();

    return (
        <div>
            <About />
            <Container>
                <Grid className={classes.layout}>
                    <Instructions />
                </Grid>
            </Container>
        </div>
    );
}

export default Home;

