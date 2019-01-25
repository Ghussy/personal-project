import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlaylistIcon from '@material-ui/icons/PlaylistAdd'
import Menu from './Menu'
import Alert from './Alert'

const styles = theme => ({


  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});

function MediaControlCard(props) {
  const { classes, theme } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.trackName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.artistName}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          
          <IconButton aria-label="Play/pause"
           onClick={() => {
             props.handlePlay(props.trackName, props.artistName)
             }} >
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
         
          <Menu
           playlists={props.playlists}
            saveSong={props.saveSong}
            trackName={props.trackName}
            artistName={props.artistName}
             artworkUrl100={props.artworkUrl100}
             collectionName={props.collectionName}
             trackId={props.trackId}
             previewUrl={props.previewUrl}
             genre={props.genre}
            ></Menu>
           
          <div> ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎  ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎  ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎ ‏‏‎</div>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.artworkUrl100}
        title="Live from space album cover"
      />
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);