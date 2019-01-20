import React, { Fragment, Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HomeContainer from "../containers/HomeContainer";
import logo from "../assets/logo.png";

const styles = theme => ({
	logo: {
		height: "80px"
	},
	grid: {
		marginTop: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2
	}
});

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<HashRouter>
				<Fragment>
					<Grid
						container
						direction="column"
						justify="flex-start"
						alignItems="center"
					>
						<Grid item className={classes.grid}>
							<img src={logo} className={classes.logo} />
						</Grid>
					</Grid>
					<Route exact path="/" component={HomeContainer} />
				</Fragment>
			</HashRouter>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
