import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
	textField: {
		margin: 2 * theme.spacing.unit
	}
});

class Item extends Component {
	state = {
		name: "",
		amount: ""
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<Grid container>
				<Grid item xs={6}>
					<TextField
						label="Item"
						value={this.state.name}
						onChange={this.handleChange("name")}
						InputLabelProps={{
							shrink: true
						}}
						margin="normal"
						variant="outlined"
						className={classes.textField}
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						label="Amount"
						value={this.state.amount}
						onChange={this.handleChange("amount")}
						type="number"
						InputLabelProps={{
							shrink: true
						}}
						margin="normal"
						variant="outlined"
						className={classes.textField}
					/>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Item);
