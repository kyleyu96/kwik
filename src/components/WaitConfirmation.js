import React, { Fragment, Component } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    wait_confirm_title: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    wait_confirm_subtitle: {
        padding: theme.spacing.unit * 3,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    wait_confirm_icon: {
        padding: theme.spacing.unit * 10,
        textAlign: 'center'
    },
    wait_confirm_button: {
        margin: theme.spacing.unit,
    },
});


class WaitConfirmation extends Component {
	render(){
        const { classes } = this.props;

		return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.wait_confirm_title} justify="center" spacing={12}>
                        <Typography variant="h4">Waiting For Kwik Customer Confirmation</Typography>
                    </Grid>
                    <Grid container className={classes.wait_confirm_subtitle} justify="center" spacing={12}>
                        <Typography variant="subtitle1">Confirmations usually take up to 5 minutes to be made by Kwik customers</Typography>
                    </Grid>
                    <Grid container className={classes.wait_confirm_icon} justify="center" spacing={12}>
                        <img src={require('../assets/waiting.gif')} width="500" />
                    </Grid>
                    <Grid container className={classes.wait_confirm_subtitle} justify="center" spacing={12}>
                        <Typography variant="p">You can cancel your offer FREE of charge</Typography>
                    </Grid>
                    <Grid container justify="center" spacing={12}>
                  <Button variant="contained" className={classes.button}>Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
        )
	}
}

export default withStyles(styles)(WaitConfirmation);
