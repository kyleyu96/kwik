import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
	container: {
		marginTop: 80
	},
	paper: {
		padding: 8 * theme.spacing.unit,
		margin: 2 * theme.spacing.unit
	},
	textField: {
		margin: 2 * theme.spacing.unit
	},
	resize: {
		minWidth: 500
	},
	button: {
		margin: 2 * theme.spacing.unit
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
				<Grid
					className={classes.container}
					container
					spacing={24}
					direction="column"
					alignItems="center"
					justify="center"
				>
					<Paper className={classes.paper}>
						<form>
							<Grid
								container
								alignItems="stretch"
								justify="space-around"
								direction="column"
							>
								{form === "login" && (
									<Fragment>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="Email"
												type="email"
												autoComplete="email"
												margin="normal"
												variant="outlined"
												value={this.state.email}
												onChange={this.handleChange(
													"email"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="Password"
												type="password"
												autoComplete="current-password"
												margin="normal"
												variant="outlined"
												value={this.state.password}
												onChange={this.handleChange(
													"password"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.button}
										>
											<Button
												variant="contained"
												fullWidth
												color="primary"
												type="submit"
											>
												Start Shopping
											</Button>
										</Grid>
									</Fragment>
								)}
								{form === "register" && (
									<Fragment>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="First Name"
												margin="normal"
												variant="outlined"
												value={this.state.firstName}
												onChange={this.handleChange(
													"firstName"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="Last Name"
												margin="normal"
												variant="outlined"
												value={this.state.lastName}
												onChange={this.handleChange(
													"lastName"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="Email"
												type="email"
												autoComplete="email"
												margin="normal"
												variant="outlined"
												value={this.state.email}
												onChange={this.handleChange(
													"email"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="Phone Number"
												type="tel"
												margin="normal"
												variant="outlined"
												value={this.state.phone}
												onChange={this.handleChange(
													"phone"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="Address"
												margin="normal"
												variant="outlined"
												value={this.state.address}
												onChange={this.handleChange(
													"address"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="Postal Code"
												margin="normal"
												variant="outlined"
												value={this.state.postalCode}
												onChange={this.handleChange(
													"postalCode"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="Password"
												type="password"
												autoComplete="current-password"
												margin="normal"
												variant="outlined"
												value={this.state.password}
												onChange={this.handleChange(
													"password"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.textField}
										>
											<TextField
												label="Credit Card"
												margin="normal"
												variant="outlined"
												value={this.state.creditCard}
												onChange={this.handleChange(
													"creditCard"
												)}
												required
												InputProps={{
													classes: {
														input: classes.resize
													}
												}}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											className={classes.button}
										>
											<Button
												variant="contained"
												color="primary"
												type="submit"
												fullWidth
											>
												Register
											</Button>
										</Grid>
									</Fragment>
								)}
							</Grid>
						</form>
					</Paper>
				</Grid>
			</Fragment>
		);
	}
}

HomeForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeForm);
