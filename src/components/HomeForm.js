import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
	button: {
		marginTop: theme.spacing.unit * 2
	}
});

class HomeForm extends React.Component {
	state = {
		form: "login",
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		address: "",
		postalCode: "",
		creditCard: "",
		phone: ""
	};

	changeTab = (event, value) => {
		this.setState({ form: value });
	};

	handleChange = prop => event => {
		this.setState({ [prop]: event.target.value });
	};

	render() {
		const { classes } = this.props;
		const { form } = this.state;
		return (
			<Fragment>
				<AppBar position="static">
					<Tabs
						value={form}
						onChange={this.changeTab}
						variant="fullWidth"
					>
						<Tab label="Login" value="login" />
						<Tab label="Register" value="register" />
					</Tabs>
				</AppBar>
				{form === "login" && (
					<form>
						<TextField
							label="Email"
							type="email"
							autoComplete="email"
							margin="normal"
							variant="outlined"
							value={this.state.email}
							onChange={this.handleChange("email")}
							fullWidth
							required
						/>
						<TextField
							label="Password"
							type="password"
							autoComplete="current-password"
							margin="normal"
							variant="outlined"
							value={this.state.password}
							onChange={this.handleChange("password")}
							fullWidth
							required
						/>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							className={classes.button}
						>
							Start Shopping
						</Button>
					</form>
				)}
				{form === "register" && (
					<form>
						<TextField
							label="First Name"
							margin="normal"
							variant="outlined"
							value={this.state.firstName}
							onChange={this.handleChange("firstName")}
							fullWidth
							required
						/>
						<TextField
							label="Last Name"
							margin="normal"
							variant="outlined"
							value={this.state.lastName}
							onChange={this.handleChange("lastName")}
							fullWidth
							required
						/>
						<TextField
							label="Email"
							type="email"
							autoComplete="email"
							margin="normal"
							variant="outlined"
							value={this.state.email}
							onChange={this.handleChange("email")}
							fullWidth
							required
						/>
						<TextField
							label="Phone Number"
							type="tel"
							margin="normal"
							variant="outlined"
							value={this.state.phone}
							onChange={this.handleChange("phone")}
							fullWidth
							required
						/>
						<TextField
							label="Address"
							margin="normal"
							variant="outlined"
							value={this.state.address}
							onChange={this.handleChange("address")}
							fullWidth
							required
						/>
						<TextField
							label="Postal Code"
							margin="normal"
							variant="outlined"
							value={this.state.postalCode}
							onChange={this.handleChange("postalCode")}
							fullWidth
							required
						/>
						<TextField
							label="Password"
							type="password"
							autoComplete="current-password"
							margin="normal"
							variant="outlined"
							value={this.state.password}
							onChange={this.handleChange("password")}
							fullWidth
							required
						/>
						<TextField
							label="Credit Card"
							margin="normal"
							variant="outlined"
							value={this.state.creditCard}
							onChange={this.handleChange("creditCard")}
							fullWidth
							required
						/>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							className={classes.button}
						>
							Register
						</Button>
					</form>
				)}
			</Fragment>
		);
	}
}

HomeForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeForm);
