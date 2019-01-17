import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import PrimarySearchBarApp from './components/Appbar/Appbar'



class App extends Component {

constructor(props) {
  super(props)
  this.state={
  open: false
  }
}
  

   toggleDrawer = (open) => () => {
    this.setState({ open : true });
    console.log('Juul has been hit')
  };




  render() {
    return (
      <div className="App">
        <PrimarySearchBarApp ></PrimarySearchBarApp>
      
        
        {routes}
      </div>
    );
  }
}

export default App;
