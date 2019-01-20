import React, { Fragment, Component } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    confirmation_title: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    confirmation_subtitle: {
        padding: theme.spacing.unit * 3,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    confirmation_icon: {
        padding: theme.spacing.unit,
        textAlign: 'center'
    },
    confirmation_button: {
        margin: theme.spacing.unit,
    },
    confirmation_tip: {
        padding: theme.spacing.unit * 4,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});


class Confirmation extends Component {
	render(){
        const { classes } = this.props;

		return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.confirmation_title} justify="center" spacing={12}>
                        <Typography variant="h4">Found A Kwik Delivery</Typography>
                    </Grid>
                    <Grid container className={classes.confirmation_subtitle} justify="center" spacing={12}>
                        <Typography variant="subtitle1">Match found. Your Kwik Driver is "Bob".</Typography>
                    </Grid>
                    <Grid container className={classes.confirmation_icon} justify="center" spacing={12}>
                        <img src={require('../assets/checkmark.gif')} width="500" />
                    </Grid>
                    <Grid container className={classes.confirmation_tip}  justify="center" spacing={12}>
                        <Typography variant="h5">Bob's Tip: CAD 6.05</Typography>
                    </Grid>
                    <Grid container justify="center" spacing={12}>
                        <Grid item justify="center" spacing={4}>
                      <Button variant="contained" color="primary" className={classes.confirmation_button}>Accept</Button>
                        </Grid>
                        <Grid item justify="center" spacing={6}>
                      <Button variant="contained" color="secondary" className={classes.confirmation_button}>Reject</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
	}
}

export default withStyles(styles)(Confirmation);
