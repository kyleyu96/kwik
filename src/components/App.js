import React, { Fragment, Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HomeContainer from "../containers/HomeContainer";
import logo from "../assets/logo.png";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Components
import Confirmation from "./Confirmation"
import ETA from "./ETA"
import Map from "./Map"
import OutForDeliveryCouriers from "./OutForDeliveryCouriers"
import OutForDeliveryCustomer from "./OutForDeliveryCustomer"
import Review from "./Review"
import Role from "./Role"
import Search from "./Search"
import WaitConfirmation from "./WaitConfirmation"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#444444'
        },
        secondary: {
            main: '#ffab40'
        }
      },
});

const styles = theme => ({
	logo: {
		height: "80px"
	},
	grid: {
		marginTop: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2
	},
    kwik_bg: {
      minHeight: "100%",
      minWidth: "1024px",
      width: "100%",
      height: "auto",
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
      opacity: 0.06
    },
    grow: {
        flexGrow: 1,
    },
     menuButton: {
        marginLeft: -12,
        marginRight: 20,
     },
});

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
            <div>
                <img className={classes.kwik_bg} src={require('../assets/background.jpg')} />
                <MuiThemeProvider theme={theme}>
                    <HashRouter>
                        <Fragment>
                            <AppBar style={{ background: '#444444' }} position="static">
                                <Toolbar>
                                    <Typography variant="h6" color="inherit" className={classes.grow}>
                                        <img src={logo} className={classes.logo} />
                                  </Typography>
                                  <Button color="inherit">Login</Button>
                                </Toolbar>
                              </AppBar>
                            <Grid
                                container
                                direction="column"
                                justify="flex-start"
                                alignItems="center"
                            >
                            </Grid>
                            <Route exact path="/" component={HomeContainer} />
                            <Route exact path="/Confirmation" component={Confirmation} />
                            <Route exact path="/ETA" component={ETA} />
                            <Route exact path="/Map" component={Map} />
                            <Route exact path="/OutForDeliveryCouriers" component={OutForDeliveryCouriers} />
                            <Route exact path="/OutForDeliveryCustomer" component={OutForDeliveryCustomer} />
                            <Route exact path="/Review" component={Review} />
                            <Route exact path="/Role" component={Role} />
                            <Route exact path="/Search" component={Search} />
                            <Route exact path="/WaitConfirmation" component={WaitConfirmation} />
                        </Fragment>
                    </HashRouter>
                </MuiThemeProvider>
            </div>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
