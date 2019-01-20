import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    role_title: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    role_subtitle: {
        marginBottom: theme.spacing.unit * 2,
        color: theme.palette.text.secondary
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

class Role extends Component {
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
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={16}
                    >
                        <Grid item xs={12}>
                            <Typography
                                variant="h6"
                                className={classes.role_title}
                            >
                                Kwik Role
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">
                                Choose your Kwik role
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <a href="/reqform">
                                <img
                                    src={require("../assets/request-person.svg")}
                                    maxWidth="200"
                                />
                            </a>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="subtitle1"
                                className={classes.role_subtitle}
                            >
                                I want to request an item
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <a href="/map">
                                <img
                                    src={require("../assets/delivery-person.svg")}
                                    maxWidth="200"
                                />
                            </a>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="subtitle1"
                                className={classes.role_subtitle}
                            >
                                I want to deliver an item
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(Role);
