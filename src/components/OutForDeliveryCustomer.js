import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    container: {
        marginTop: 50,
        minWidth: 550
    },
    title: {
        marginTop: 6 * theme.spacing.unit
    },
    out_for_delivery_title: {
        padding: theme.spacing.unit * 3,
        color: theme.palette.text.secondary
    },
    out_for_delivery_subtitle: {
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    out_for_delivery_icon: {
        textAlign: "center"
    },
    out_for_delivery_button: {
        margin: 2 * theme.spacing.unit
    },
    typography: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    }
});

class OutForDeliveryCustomer extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.location.href = "/Review";
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
                <Paper style={{ minWidth: 550 }}>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        direction="column"
                    >
                        <Grid item className={classes.title}>
                            <Typography
                                variant="h6"
                                align="center"
                                className={classes.typography}
                            >
                                Your Package Is On Its Way
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            className={classes.out_for_delivery_subtitle}
                        >
                            <Typography
                                variant="p"
                                align="center"
                                className={classes.typography}
                            >
                                Kwik deliverer Bob has your package
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img
                                src={require("../assets/out-for-delivery.gif")}
                                width="300"
                                height="300"
                                alt=""
                            />
                        </Grid>
                        <Grid
                            item
                            className={classes.out_for_delivery_subtitle}
                        >
                            <Typography
                                variant="p"
                                className={classes.typography}
                            >
                                You might be charged a fee by your provider if
                                you call a Kwik driver
                            </Typography>
                        </Grid>
                        <Grid item spacing={16}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.out_for_delivery_button}
                            >
                                Call
                            </Button>
                            <Button
                                variant="contained"
                                className={classes.out_for_delivery_button}
                            >
                                Report
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(OutForDeliveryCustomer);
