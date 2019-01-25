import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import PlaylistIcon from '@material-ui/icons/PlaylistAdd'
import Alert from './Alert'

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (playlistName) => {
    this.setState({ anchorEl: null });
    this.props.saveSong(
        this.props.trackName,
        this.props.artistName,
        this.props.artworkUrl100,
        this.props.collectionName,
        this.props.trackId,
        this.props.previewUrl,
        this.props.genre,
        playlistName
    )
  };

  render(props) {
      
    const { anchorEl } = this.state;
    let items = this.props.playlists;
    let newItems = [];


if(items) {
    newItems = items.map((e, i) => (
        <MenuItem onClick={()=> this.handleClose(e.playlist_name) }>{e.playlist_name}</MenuItem>
    ))

    }
    return (
      <div>
        {/* <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Playlists
        </Button> */}
        <IconButton aria-label="Favorite">
        <PlaylistIcon
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={this.handleClick}/>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        {newItems}
        </Menu>
        
      </div>
    );
  }
}

export default SimpleMenu;