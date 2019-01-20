import React, { Fragment, Component } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    role_title: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    role_subtitle: {
        padding: theme.spacing.unit * 3,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    role_icon: {
        padding: theme.spacing.unit * 3,
        textAlign: 'center'
    },
    role_button: {
        margin: theme.spacing.unit,
    },
});


class Role extends Component {
	render(){
        const { classes } = this.props;

		return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.role_title} justify="center" spacing={12}>
                        <Typography variant="h4">Kwik Role</Typography>
                    </Grid>
                    <Grid container className={classes.role_subtitle} justify="center" spacing={12}>
                        <Typography variant="subtitle1">Choose your Kwik role</Typography>
                    </Grid>
                    <Grid container className={classes.role_icon} justify="center" spacing={12}>
                        <img src={require('../assets/request-person.svg')} width="250" />
                    </Grid>
                    <Grid container justify="center" spacing={12}>
                        <Typography variant="h5">I want to request an item</Typography>
                    </Grid>
                    <Grid container className={classes.role_icon} justify="center" spacing={12}>
                        <img src={require('../assets/delivery-person.svg')} width="250" />
                    </Grid>
                    <Grid container className={classes.role_subtitle} justify="center" spacing={12}>
                        <Typography variant="h5">I want to deliver an item</Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
	}
}

export default withStyles(styles)(Role);
