import React, { Component, Fragment } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Item from "./Item";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = theme => ({
  container: {
    marginTop: 120
  },
  paper: {
    padding: 2 * theme.spacing.unit,
    margin: 2 * theme.spacing.unit
  },
  textField: {
    margin: 2 * theme.spacing.unit
  },
  button: {
    marginLeft: 2 * theme.spacing.unit,
    marginRight: 2 * theme.spacing.unit,
    marginTop: 1 * theme.spacing.unit,
    marginBottom: 1 * theme.spacing.unit
  }
});

class ReqForm extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      items: [],
      user_req: "",
      user_del: "2001",
      // "time": ,
      store: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { user } = this.props;
    if (prevProps.user !== user)
      this.setState({
        location: user.location,
        languages: user.languages.join(", ")
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  addTextField = () => {
    let items = [...this.state.items];
    items.push({});
    this.setState({
      items: items
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      ...this.state,
      gameName: this.props.gameName,
      gameId: this.props.gameId,
      content: "Request for Mentor",
      user: this.props.user
    };
  };

  render() {
    const { items, store } = this.state;
    const { user, classes } = this.props;

    return (
      <Grid
        className={classes.container}
        container
        spacing={24}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Paper className={classes.paper}>
          <Grid item xs={12}>
            <form noValidate autoComplete="off">
              <Grid
                container
                alignItems="stretch"
                justify="space-around"
                direction="column"
              >
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Typography
                      align="center"
                      component="h6"
                      variant="headline"
                      gutterBottom
                    >
                      Make an order
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} className={classes.textField}>
                  <TextField
                    label="Store"
                    value={this.state.name}
                    onChange={this.handleChange("store")}
                    InputLabelProps={{
                      shrink: true
                    }}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Item />
                </Grid>
                {this.state.items.map(item => (
                  <Grid item xs={12}>
                    <Item />
                  </Grid>
                ))}
                <Grid item xs={12} className={classes.button}>
                  <Button
                    variant="contained"
                    color="default"
                    fullWidth
                    onClick={this.addTextField}
                  >
                    Add another item
                  </Button>
                </Grid>
                <Grid item xs={12} className={classes.button}>
                  <Button
                    variant="contained"
                    href="#Search"
                    color="primary"
                    fullWidth
                  >
                    Submit order
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(ReqForm);
