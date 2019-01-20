import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Request from "../assets/request-person";
import Delivery from "../assets/delivery-person";

const styles = theme => ({});

const Role = ({ classes, firstName, role, changeRole }) => (
	<Fragment>
		<Typography>{`Hi ${firstName}! What would you like to do today?`}</Typography>

		<Button variant="contained" color="primary">
			{`Continue as ${role}`}
		</Button>
	</Fragment>
);

Role.propTypes = {
	classes: PropTypes.object.isRequired,
	firstName: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	changeRole: PropTypes.func.isRequired
};

export default withStyles(styles)(Role);
