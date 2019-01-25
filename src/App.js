import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import PrimarySearchBarApp from './components/Appbar/Appbar'
import { withRouter } from 'react-router-dom'




class App extends Component {

constructor(props) {
  super(props)
  this.state={
  open: false,
  hideNav: true
  }
}
  

   toggleDrawer = (open) => () => {
    this.setState({ open : true });
    console.log('Juul has been hit')
  };



  render() {
console.log(this.props.match)
    if (this.props.match.path === '/' ) {
      return (<div className="App">
        
      {routes}
      
     </div>)
     } else { 
 
     return (
       <div className="App">
        
        <PrimarySearchBarApp/>
        
        {routes}
        
       </div>
     );
   }
 }
 }

export default withRouter(App);
