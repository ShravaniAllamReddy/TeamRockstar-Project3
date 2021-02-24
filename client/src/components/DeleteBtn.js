import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    delete: {
        float: 'right',
    }
}));

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
    const classes = useStyles();
    return (
        <span className={classes.delete} {...props} role="button" tabIndex="0">
            ✗
        </span>
    );
}

export default DeleteBtn;