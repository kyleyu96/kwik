import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    eta_title: {
        padding: theme.spacing.unit * 5,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    eta_hours: {
        padding: theme.spacing.unit * 4,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    eta_tip: {
        padding: theme.spacing.unit * 4,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    eta_button: {
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

class ETA extends Component {
    render() {
        const { classes } = this.props;
        var tip = (5 + Math.random() * 10).toFixed(2);

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
                                className={classes.eta_title}
                                justify="center"
                                spacing={16}
                            >
                                <Typography variant="h4">
                                    Estimate Time Arrival
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.eta_title}
                                justify="center"
                                spacing={16}
                            >
                                <Typography variant=" subtitle1">
                                    Let the customer know (on average) in how
                                    many hours they should expect their package
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.eta_hours}
                                justify="center"
                                spacing={16}
                            >
                                <TextField
                                    label="Hours"
                                    type="number"
                                    defaultValue="2"
                                    className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid
                                container
                                className={classes.eta_tip}
                                justify="center"
                                spacing={16}
                            >
                                <Typography variant="h5">
                                    Your Tip: CAD {tip}
                                </Typography>
                            </Grid>
                            <Grid container justify="center" spacing={16}>
                                <Link to={"/WaitConfirmation"}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        className={classes.button}
                                        fullWidth
                                    >
                                        Confirm
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

export default withStyles(styles)(ETA);
