
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import AddCircle from '@material-ui/icons/Add'

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  });

class Grid extends Component {

constructor(props) {
  super(props)

  const { classes } = props;

}

render(){

  const songData = [];
  this.props.songData.forEach(element => {
    let song = {
      img: element['im:image'][2].label,
    title: element['im:name'].label,
    author: element.artistName
    }
    songData.push(song)
  })

const {classes} = this.props



return(
 

  <div className={classes.root}>
    <GridList className={classes.gridList}  cols={2.5}>
      {songData.map(tile => (
        <GridListTile key={tile.img}>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <IconButton>
                <AddCircle className={classes.title} />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  </div>
)

}


}

export default withStyles(styles)(Grid);