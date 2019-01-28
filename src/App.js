import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import PrimarySearchBarApp from './components/Appbar/Appbar'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';



class App extends Component {

constructor(props) {
  super(props)
  this.state={
  open: false,
  hideNav: true,
  user: {}
  }
}
  

   toggleDrawer = (open) => () => {
    this.setState({ open : true });
    console.log('Juul has been hit')
  };

  componentDidMount = async() => {
    let res = await axios('/getUserInfo')
    this.setState({
      user: res.data
    })
  }




  render() {
console.log(this.props.username)
    
      return (<div className="App">
        
        
      {routes}
      
     </div>)
    
     
   
 }
 }

 function MapStateToProps( reduxState ) {
  const { username } = reduxState;
  return {username}
  
 }

export default withRouter(connect(MapStateToProps)(App));
