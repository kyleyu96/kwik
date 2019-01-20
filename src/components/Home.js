import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HomeForm from "./HomeForm";

const styles = theme => ({
	form: {
		paddingLeft: theme.spacing.unit * 5,
		paddingRight: theme.spacing.unit * 5
	}
});

const Home = ({ classes }) => (
	<Grid container direction="row" justify="center" alignItems="center">
		<Grid item xs={12} className={classes.form}>
			<HomeForm />
		</Grid>
	</Grid>
);

Home.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
