import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Login from './Login'
import './Card.scss'

const styles = {
  card: {
    maxWidth: 345,
    
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      
        <CardMedia
          className={classes.media}
          image="https://cdn4.pitchfork.com/longform/371/greatesthits1440.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className='card-content' >
          
          
            
            <Login className='login'></Login>
            
          
        </CardContent>
      
      <CardActions>
      
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);