import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    wait_confirm_title: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    wait_confirm_subtitle: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    wait_confirm_icon: {
        padding: theme.spacing.unit,
        textAlign: "center"
    },
    wait_confirm_button: {
        margin: theme.spacing.unit
    },
    image: {
        margin: theme.spacing.unit
    },
    container: {
        marginTop: 50,
        minWidth: 550
    },
    title: {
        marginTop: 6 * theme.spacing.unit
    },
    button: {
        margin: 2 * theme.spacing.unit
    }
});

class WaitConfirmation extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.location.href = "/Review";
        }, 10000);
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
                <Paper className={classes.paper} style={{ minWidth: 550 }}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <Grid
                                container
                                className={classes.title}
                                justify="center"
                                spacing={16}
                            >
                                <Typography variant="h6">
                                    Waiting For Kwik Customer Confirmation
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.wait_confirm_subtitle}
                                justify="center"
                                spacing={16}
                            >
                                <Typography variant="subtitle1">
                                    Confirmations usually take up to 5 minutes
                                    to be made by Kwik customers
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.wait_confirm_icon}
                                justify="center"
                                spacing={16}
                            >
                                <img
                                    src={require("../assets/waiting.gif")}
                                    width="300"
                                    height="300"
                                    className={classes.image}
                                />
                            </Grid>
                            <Grid
                                container
                                className={classes.wait_confirm_subtitle}
                                justify="center"
                                spacing={16}
                            >
                                <Typography variant="p">
                                    You can cancel your offer FREE of charge
                                </Typography>
                            </Grid>
                            <Grid container justify="center" spacing={16}>
                                <Link to={"/map"}>
                                    <Button
                                        variant="contained"
                                        className={classes.button}
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(WaitConfirmation);
