import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleDelete() {
   // eslint-disable-line no-alert
}

function handleClick(props) {
  alert('You clicked the Chip.'); 
  props.chipClick();// eslint-disable-line no-alert
}

function Chips(props) {
  const { classes } = props;
  return (

    <div className={classes.root}>
      
      <div className={classes.root}>
      <Chip label="Alternative" className={classes.chip} onClick={() => props.chipClick('Alternative')}/>
      <Chip label="Blues" className={classes.chip} onClick={() => props.chipClick("Blues")}/>
      <Chip label="Classical" className={classes.chip} onClick={() => props.chipClick('Classical')}/>
      <Chip label="Hard Rock" className={classes.chip} onClick={() => props.chipClick('Rock')}/>
      <Chip label="Pop" className={classes.chip} onClick={() => props.chipClick('Pop')}/>
      <Chip label="Indie" className={classes.chip} onClick={() => props.chipClick('Indie')}/>
      <Chip label="Reggae" className={classes.chip} onClick={() => props.chipClick('Reggae')}/>
      <Chip label="Urbano Latino" className={classes.chip} onClick={() => props.chipClick('Urbano Latino')}/>
      <Chip label="Country" className={classes.chip} onClick={() => props.chipClick('Country')}/>
      <Chip label="Electronic" className={classes.chip} onClick={() => props.chipClick('Electronic')}/>
      <Chip label="Hop-Hop/Rap" className={classes.chip} onClick={() => props.chipClick('Hop-Hop/Rap')}/>
      <Chip label="Jazz" className={classes.chip} onClick={() => props.chipClick('Jazz')}/>
      <Chip label="Rock" className={classes.chip} onClick={() => props.chipClick('Rock')}/>
      <Chip label="Dance" className={classes.chip} onClick={() => props.chipClick('Dance')}/>
      <Chip label="Metal" className={classes.chip} onClick={() => props.chipClick('Metal')}/>
      <Chip label="Holiday" className={classes.chip} onClick={() => props.chipClick('Holiday')}/>
      <Chip label="Oldies" className={classes.chip} onClick={() => props.chipClick('Oldies')}/>
      <Chip label="Deep House" className={classes.chip} onClick={() => props.chipClick('Deep House')}/>
      <Chip label="Soul/Funk" className={classes.chip} onClick={() => props.chipClick('Soul/Funk')}/>
      <Chip label="Christian & Gospel" className={classes.chip} onClick={() => props.chipClick('Christian & Gospel')}/>
      <Chip label="African Music" className={classes.chip} onClick={() => props.chipClick('African Music')}/>
    </div>
      
    </div>
  );
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chips);