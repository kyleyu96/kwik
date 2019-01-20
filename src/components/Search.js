import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    search_title: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    search_subtitle: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    search_icon: {
        padding: theme.spacing.unit * 2,
        textAlign: "center"
    },
    container: {
        marginTop: 50
    },
    title: {
        marginTop: 6 * theme.spacing.unit
    },
    button: {
        margin: 2 * theme.spacing.unit
    }
});

class Search extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.location.href = "/Confirmation";
        }, 15000);
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid
                className={classes.container}
                container
                spacing={24}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Paper className={classes.paper}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Grid item xs={12} className={classes.title}>
                                <Typography
                                    align="center"
                                    component="h6"
                                    variant="headline"
                                    gutterBottom
                                >
                                    Searching For Kwik Delivery
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                className={classes.search_subtitle}
                                spacing={12}
                            >
                                <Typography variant="subtitle1">
                                    Requests usually take up to 3 minutes to be
                                    assigned to Kwik delivery
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                className={classes.search_icon}
                                spacing={12}
                            >
                                <img src={require("../assets/searching.gif")} />
                            </Grid>
                            <Grid
                                item
                                className={classes.search_subtitle}
                                spacing={12}
                            >
                                <Typography variant="p">
                                    You can cancel your request during the
                                    search process FREE of charge
                                </Typography>
                            </Grid>
                            <Grid item spacing={12} className={classes.button}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    href="/Order"
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(Search);
