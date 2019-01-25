import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  picture: {
    height: '60vh',
    width: '100%',
    objectFit: 'cover'
  }
  
});

class Home extends Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <>
      <Grid container spacing ={0}>
      <Grid item xs={12}>
      <img
      classname={classes.picture}
      src="https://i.pinimg.com/originals/1c/a6/e1/1ca6e1c35e2d884230242cc0326dbf28.jpg" alt="Pokemon"></img>
      </Grid>
      </Grid>
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>What is This?</Typography>
            <Typography className={classes.secondaryHeading}>Description of The Pokemon Clicky Game</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              This is a Pokedex Clicky Game where you can compete against other players for the longest run of correct pokemon choices.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>How Do I Play?</Typography>
            <Typography className={classes.secondaryHeading}>
              Instructions On How To Play Pokemon Clicky Game
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Your task is to click on the different pokemon that appear on the screen. Each time a new pokemon is clicked, the screen will show a brand new list of 16 different pokemon from the entire Pokedex. You are awarded points for the amount of clicks you can go before you click the same pokemon again. If you click the same pokemon twice, you lose and the game is over.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>How Do I Begin?</Typography>
            <Typography className={classes.secondaryHeading}>
              Steps To Start The Pokemon Clicky Game.
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Click the Sign Up button in the Navigtation Bar to create an account. You will need to Sign-In with your Gmail Account. Once you sign in you will be able to start new games and view your ranking on the leaderboard.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Personal data?</Typography>
            <Typography className={classes.secondaryHeading}>
            Reasons for Linking Gmail to The Clicky Game.
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              In order to keep your scores and stats secure to you as a user, we only require you sign in with Gmail because of its security and reliability. The Pokemon Clicky Game will never share your information with third parties or other users.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      </>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);