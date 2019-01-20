import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  review_title: {
    padding: theme.spacing.unit * 3,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  review_subtitle: {
    padding: theme.spacing.unit * 3,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  search_stars: {
    padding: theme.spacing.unit * 8,
    textAlign: "center"
  },
  review_stars_text: {
    fontSize: 40,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  review_button: {
    margin: theme.spacing.unit * 5
  },
  container: {
    marginTop: 50,
    minWidth: 550
  },
  title: {
    marginTop: 6 * theme.spacing.unit
  },
  button: {
    margin: 2 * theme.spacing.unit
  }
});

class Review extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    const { classes } = this.props;

    return (
      <Grid
        className={classes.container}
        container
        spacing={24}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Paper className={classes.paper} style={{ minWidth: 550 }}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Grid
                container
                className={classes.title}
                justify="center"
                spacing={16}
              >
                <Typography variant="h6">Thank you for using Kwik!</Typography>
              </Grid>
              <Grid
                container
                className={classes.review_subtitle}
                justify="center"
                spacing={16}
              >
                <Typography variant="subtitle1">
                  Rate your experience
                </Typography>
              </Grid>
              <Grid
                container
                className={classes.review_stars}
                justify="center"
                spacing={16}
              >
                <StarRatingComponent
                  name="rate1"
                  className={classes.review_stars_text}
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
              </Grid>
              <Grid container justify="center" spacing={16}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.review_button}
                  href="/reqform"
                >
                  Rate
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Review);
