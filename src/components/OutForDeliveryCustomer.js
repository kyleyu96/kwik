import React, { Fragment, Component } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    out_for_delivery_title: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    out_for_delivery_subtitle: {
        padding: theme.spacing.unit * 3,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    out_for_delivery_icon: {
        padding: theme.spacing.unit * 10,
        textAlign: 'center'
    },
    out_for_delivery_button: {
        margin: theme.spacing.unit,
    },
});


class OutForDeliveryCustomer extends Component {
	render(){
        const { classes } = this.props;

		return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.out_for_delivery_title} justify="center" spacing={12}>
                        <Typography variant="h4">Your Package Is On Its Way</Typography>
                    </Grid>
                    <Grid container className={classes.out_for_delivery_subtitle} justify="center" spacing={12}>
                        <Typography variant="p">Kwik delivery "Bob" has your package</Typography>
                    </Grid>
                    <Grid container className={classes.out_for_delivery_icon} justify="center" spacing={12}>
                        <img src={require('../assets/out-for-delivery.gif')} width="500"/>
                    </Grid>
                    <Grid container className={classes.out_for_delivery_subtitle} justify="center" spacing={12}>
                        <Typography variant="p">You might be charged a fee by your provider if you call a Kwik driver</Typography>
                    </Grid>
                    <Grid container justify="center" spacing={12}>
                        <Grid item justify="center" spacing={4}>
                      <Button variant="contained" color="primary" className={classes.out_for_delivery_button}>Call</Button>
                        </Grid>
                        <Grid item justify="center" spacing={6}>
                      <Button variant="contained" className={classes.out_for_delivery_button}>Report</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
	}
}

export default withStyles(styles)(OutForDeliveryCustomer);
