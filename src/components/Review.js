import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  review_title: {
    padding: theme.spacing.unit * 5,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  review_subtitle: {
    padding: theme.spacing.unit * 5,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  search_stars: {
    padding: theme.spacing.unit * 15,
    textAlign: "center"
  },
  review_stars_text: {
    fontSize: 40,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  review_button: {
    margin: theme.spacing.unit * 10
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
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.review_title}
            justify="center"
            spacing={16}
          >
            <Typography variant="h4">Thank you for using Kwik</Typography>
          </Grid>
          <Grid
            container
            className={classes.review_subtitle}
            justify="center"
            spacing={16}
          >
            <Typography variant="subtitle1">Rate your experience</Typography>
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
            >
              Rate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Review);
