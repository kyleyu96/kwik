import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import history from "../history";

const styles = theme => ({
	button: {
		marginTop: theme.spacing.unit * 2
	},
	form: {
		marginTop: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2
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
		error: ""
	};

	changeTab = (event, value) => {
		this.setState({ form: value });
	};

	handleChange = prop => event => {
		this.setState({ [prop]: event.target.value });
	};

	login = e => {
		const { users, setCurrentUser } = this.props;
		const user = Object.keys(users).find(
			item => users[item].email === this.state.email
		);
		if (user) {
			if (this.state.password === user.password) {
				setCurrentUser(user);
				history.push("/role");
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
		e.preventDefault();
	};

	register = e => {
		const { users, addUser } = this.props;
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
			history.push("/role");
		}
		e.preventDefault();
	};

	render() {
		const { classes } = this.props;
		const { form, error } = this.state;
		return (
			<div className={classes.form}>
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
					<form onSubmit={this.login}>
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
							fullWidth
						>
							Start Shopping
						</Button>
					</form>
				)}
				{form === "register" && (
					<form onSubmit={this.register}>
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
							fullWidth
						>
							Register
						</Button>
					</form>
				)}
				<Typography color="error" align="center">
					{error}
				</Typography>
			</div>
		);
	}
}

export default withStyles(styles)(HomeForm);
