import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
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
        margin: theme.spacing.unit
    },
    typography: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    }
});

class OutForDeliveryCouriers extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
            >
                <Grid item className={classes.out_for_delivery_title}>
                    <Typography
                        variant="h4"
                        align="center"
                        className={classes.typography}
                    >
                        Kwik Customer Is Waiting For Their Package
                    </Typography>
                </Grid>
                <Grid item className={classes.out_for_delivery_subtitle}>
                    <Typography
                        variant="p"
                        align="center"
                        className={classes.typography}
                    >
                        Kwik customer could call you for details about their
                        request
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
                <Grid item className={classes.out_for_delivery_subtitle}>
                    <Typography variant="p" className={classes.typography}>
                        You might be charged a fee by your provider if you call
                        a Kwik customer
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
        );
    }
}

export default withStyles(styles)(OutForDeliveryCouriers);
