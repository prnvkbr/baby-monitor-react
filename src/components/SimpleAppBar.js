import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const styles = {
    root: {
        flexGrow: 1,
    },
    color: {
        backgroundColor: "#4285f4"
    },
};

function SimpleAppBar(props) {
    const { classes } = props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.color}>
        <ToolBar>
            <Typography variant="h5" color="inherit">
                Dashboard
            </Typography>
        </ToolBar>
        </AppBar>
      </div>
    );
}

SimpleAppBar.prototype = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar)