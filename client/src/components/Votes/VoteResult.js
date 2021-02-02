import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: '100%'
    },

});

export default function VoteResult(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Grid container>
                <Grid item>
                    <TableContainer>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>

                                    <StyledTableCell align="center" >Username</StyledTableCell>
                                    <StyledTableCell align="center">Restaurant Voted</StyledTableCell>
                                    <StyledTableCell align="center">Movie Voted</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.savedVotes.map((vote) => (
                                    <StyledTableRow key={vote._id}>

                                        <StyledTableCell align="center">{vote.user.email}</StyledTableCell>
                                        <StyledTableCell align="center">{vote.foodVoted}</StyledTableCell>
                                        <StyledTableCell align="center">{vote.movieVoted}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Grid>
    );
}
//to display voteresults
// const VoteResult = (props) => {


//     return props.savedVotes.length > 0 ? (

//         <div className="card">
//             <div className="card-body">
//                 {props.savedVotes.map((vote) => {
//                     return (
//                         <div className="card">
//                             <div className="card-body">
//                                 <div className='text-center' key={vote._id}>

//                                     <h3 className="font-weight-bold">{vote.user.email}:</h3>

//                                     <Typography component="h1" variant="h5">
//                                         FoodVoted: {vote.foodVoted}
//                                     </Typography>

//                                     <Typography component="h1" variant="h5">
//                                         MovieVoted:{vote.movieVoted}
//                                     </Typography>

//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>

//     ) : (
//             <h3>No Votes to display</h3>
//         );

// };
