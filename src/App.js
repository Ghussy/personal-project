import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import routes from './routes'
import PrimarySearchBarApp from './components/Appbar/Appbar'
import TemporaryDrawer from './components/SideDrawer/Sidedrawer'



class App extends Component {



handleClick(val) {
    axios.get(`https://itunes.apple.com/search?term=kendrick+lamar&limit=1`)
    .then(res => {
      console.log(res.data)
      console.log("req received")
    })
  };


  render() {
    return (
      <div className="App">
        <PrimarySearchBarApp></PrimarySearchBarApp>
        
        <Button onClick={() => this.handleClick()} variant="contained">Click Me</Button>
        {routes}
      </div>
    );
  }
}

export default App;
