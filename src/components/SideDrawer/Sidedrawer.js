import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle'
import QueueMusic from '@material-ui/icons/QueueMusic'
import SettingsIcon from '@material-ui/icons/Settings'
import Dashboard from '@material-ui/icons/Dashboard'
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import LogoutIcon from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'
import SubButton from '@material-ui/icons/Subscriptions'


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };

  const sideList = (
    <div className={classes.list}>
      <List>
        {['Profile'].map((text, index) => (
            <Link to='/profile' style={{ textDecoration: 'none' }} >
          <ListItem button key={text} >
            <ListItemIcon>{index % 2 === 0 ? <AccountCircle onClick={()=>{console.log('buttton hit')}}/> : <Dashboard />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
         {['Dashboard'].map((text, index) => (
             <Link to='/dashboard' style={{ textDecoration: 'none' }}>
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Dashboard /> : <Dashboard />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
        {['Playlists'].map((text, index) => (
           <Link to='/playlists' style={{ textDecoration: 'none' }}>
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <QueueMusic /> : <SettingsIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
        {['Search'].map((text, index) => (
          <Link to='/Search' style={{ textDecoration: 'none' }}>
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <SearchIcon /> : <SearchIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
        {['Youtube'].map((text, index) => (
          <Link to='/youtube' style={{ textDecoration: 'none' }}>
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <SubButton /> : <SubButton />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
        {['Settings'].map((text, index) => (
          <Link to='/Settings' style={{ textDecoration: 'none' }}>
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <SettingsIcon /> : <SettingsIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        
        {['Logout'].map((text, index) => (
          <Link to='/' style={{ textDecoration: 'none' }}>
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <LogoutIcon /> : <SettingsIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  

  return (
    <div>
      <div onClick={toggleDrawer('left', true)}> <MenuIcon onHover='cursor= pointer'/> </div>
      

      
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
     
    </div>
  );
}

export default SwipeableTemporaryDrawer;
