import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
    
      <Fab  aria-label="Delete" className={classes.fab} onClick={props.handleClick}>
      ‏‏‎ ‏‏‎ ‏‏‎ 
        <SearchIcon className={classes.extendedIcon} />
  
      </Fab>
     
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);