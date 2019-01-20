import React, { Fragment } from "react";
import { Redirect } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
	container: {
		marginTop: 50
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
		phone: "",
		error: "",
		nextPage: false
	};

	changeTab = (event, value) => {
		this.setState({ form: value });
	};

	handleChange = prop => event => {
		this.setState({ [prop]: event.target.value });
	};

	login = e => {
		e.preventDefault();
		const { users, setCurrentUser } = this.props;
		const user = Object.keys(users).find(
			item => users[item].email === this.state.email
		);
		if (user) {
			if (this.state.password === users[user].password) {
				setCurrentUser(users[user]);
				this.setState({ nextPage: true });
			} else {
				this.setState({
					error: "Wrong password!"
				});
			}
		} else {
			this.setState({
				error: "This email is not registered. Please register first!"
			});
		}
	};

	register = e => {
		e.preventDefault();
		const { users, addUser, setCurrentUser } = this.props;
		const user = Object.keys(users).find(
			item => users[item].email === this.state.email
		);
		if (user) {
			this.setState({
				error: "This email is already registered!"
			});
		} else {
			let id = 0;
			while (users[id]) id++;
			const newUser = {
				email: this.state.email,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				address: this.state.address,
				postalCode: this.state.postalCode,
				creditCard: this.state.creditCard,
				phone: this.state.phone
			};
			addUser(id, newUser);
			setCurrentUser(newUser);
			this.setState({ nextPage: true });
		}
	};

	render() {
		const { classes } = this.props;
		const { form, error } = this.state;

		if (this.state.nextPage === true) {
			return <Redirect to="/Role" />;
		}
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
						<Grid
							container
							alignItems="stretch"
							justify="space-around"
							direction="column"
						>
							{form === "login" && (
								<form onSubmit={this.login}>
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
								</form>
							)}
							{form === "register" && (
								<form onSubmit={this.register}>
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
								</form>
							)}
						</Grid>
						<Typography color="error" align="center">
							{error}
						</Typography>
					</Paper>
				</Grid>
			</Fragment>
		);
	}
}

export default withStyles(styles)(HomeForm);
