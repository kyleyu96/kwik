import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import OutForDeliveryCustomer from "./OutForDeliveryCustomer";

const styles = theme => ({
    container: {
        marginTop: 50,
        minWidth: 550
    },
    title: {
        marginTop: 6 * theme.spacing.unit
    },
    button: {
        margin: 2 * theme.spacing.unit
    },
    confirmation_subtitle: {
        padding: theme.spacing.unit * 3,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    confirmation_icon: {
        textAlign: "center"
    },
    confirmation_button: {
        margin: 2 * theme.spacing.unit
    },
    confirmation_tip: {
        padding: theme.spacing.unit * 4,
        textAlign: "center",
        color: theme.palette.text.secondary
    }
});

class Confirmation extends Component {
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
                <Paper style={{ minWidth: 550 }}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Grid
                                container
                                className={classes.title}
                                justify="center"
                                spacing={12}
                            >
                                <Typography variant="h6">
                                    Found A Kwik Delivery
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.confirmation_subtitle}
                                justify="center"
                                spacing={12}
                            >
                                <Typography variant="subtitle1">
                                    Match found. Your Kwik Driver is "Bob".
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.confirmation_icon}
                                justify="center"
                                spacing={12}
                            >
                                <img
                                    src={require("../assets/checkmark.gif")}
                                    width="150"
                                    height="150"
                                />
                            </Grid>
                            <Grid
                                container
                                className={classes.confirmation_tip}
                                justify="center"
                                spacing={12}
                            >
                                <Typography variant="h6">
                                    Trip fare: CAD 6.05
                                </Typography>
                            </Grid>
                            <Grid container justify="center" spacing={12}>
                                <Grid item justify="center" spacing={4}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.confirmation_button}
                                        href="/OutForDeliveryCustomer"
                                    >
                                        Accept
                                    </Button>
                                </Grid>
                                <Grid item justify="center" spacing={6}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.confirmation_button}
                                        href="/Search"
                                    >
                                        Reject
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(Confirmation);
