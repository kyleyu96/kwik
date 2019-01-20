import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import GoogleMapReact from "google-map-react";
import Popup from "reactjs-popup";
import orders from "../json/orders.json";
import users from "../json/users.json";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const MapMarker = ({ text, user }) => {
    return (
        <div>
            <Popup
                trigger={
                    <img src={require("../assets/marker.svg")} width="30" />
                }
                position="right center"
            >
                <Grid container justify="center" spacing={16}>
                    <Typography style={{ padding: "10px" }} variant="p">
                        {text}
                    </Typography>
                </Grid>
                <Grid
                    container
                    style={{ padding: 10 }}
                    justify="center"
                    spacing={16}
                >
                    <Link to={"/eta/" /*+ user*/}>
                        <Button color="primary" variant="contained">
                            Proceed
                        </Button>
                    </Link>
                </Grid>
            </Popup>
        </div>
    );
};

const styles = theme => ({
    map_title: {
        padding: theme.spacing.unit * 5,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    map_subtitle: {
        padding: theme.spacing.unit,
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    map_icon: {
        padding: theme.spacing.unit * 5,
        textAlign: "center"
    },
    map_button: {
        margin: theme.spacing.unit
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

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 45.504574,
            lng: -73.61455
        },
        zoom: 12
    };
    render() {
        const { classes } = this.props;

        return (
            <Grid
                className={classes.container}
                container
                spacing={8}
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
                                spacing={8}
                            >
                                <Typography variant="h6">
                                    Kwik Customer Map
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.title}
                                justify="center"
                                spacing={16}
                            >
                                <Typography variant="subtitle1">
                                    Deliver packages from stores near you
                                </Typography>
                            </Grid>
                            <Grid
                                container
                                className={classes.map_icon}
                                justify="center"
                                spacing={12}
                            >
                                <div style={{ height: "60vh", width: "90%" }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{
                                            key:
                                                "AIzaSyCIfQy395oDC11dEbwCpyvbVZy7cThZsX4"
                                        }}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                    >
                                        {Object.keys(orders).map(key => (
                                            <MapMarker
                                                text={
                                                    users[orders[key].user_req]
                                                        .firstName +
                                                    " is requeting:" +
                                                    orders[key].items
                                                }
                                                user="1000"
                                                lat={
                                                    users[orders[key].user_req]
                                                        .lo
                                                }
                                                lng={
                                                    users[orders[key].user_req]
                                                        .la
                                                }
                                            />
                                        ))}
                                    </GoogleMapReact>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(Map);
