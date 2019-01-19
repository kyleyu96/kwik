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


class Search extends Component {
	render(){
        const { classes } = this.props;

		return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Grid container className={classes.search_title} justify="center" spacing={12}>
                        <Typography variant="h4">Searching For A Delivery Person</Typography>
                    </Grid>
                    <Grid container className={classes.search_icon} justify="center" spacing={12}>
                        <img src={require('../assets/searching.svg')} width="200" />
                    </Grid>
                    <Grid container justify="center" spacing={12}>
                  <Button variant="contained" className={classes.button}>Cancel</Button>
                    </Grid>
                </Grid>
            </Grid>
        )
	}
}

export default withStyles(styles)(Search);
