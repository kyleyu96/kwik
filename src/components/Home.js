import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HomeFormContainer from "../containers/HomeFormContainer";

const styles = theme => ({
	form: {
		paddingLeft: theme.spacing.unit * 5,
		paddingRight: theme.spacing.unit * 5
	}
});

const Home = ({ classes }) => (
	<Grid container direction="row" justify="center" alignItems="center">
		<Grid item xs={12} className={classes.form}>
			<HomeFormContainer />
		</Grid>
	</Grid>
);

export default withStyles(styles)(Home);
