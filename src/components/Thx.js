import React, { Fragment, Component } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    search_title: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    search_icon: {
        padding: theme.spacing.unit * 15,
        textAlign: 'center'
    },
    search_button: {
        margin: theme.spacing.unit,
    },
});


class Thx extends Component {
	render(){
        const { classes } = this.props;

    return ( 
      <div>
      <h2>Thank you for using Kwik</h2>
      </div>
    );
	}
}

export default withStyles(styles)(Thx);
