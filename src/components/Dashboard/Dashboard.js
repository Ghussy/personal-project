import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from './Grid'
import './Dashboard.scss'
import PrimarySearchBarApp from '../Appbar/Appbar'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           songData: [],
           first_name: '',
           input: ''
        }
    }

    async componentDidMount(){
       await axios.get(`https://itunes.apple.com/us/rss/topsongs/limit=50/json`)
        .then(res => {
            
          this.setState({
              songData: res.data.feed.entry
          })
          
        })
        await axios.get(`/getUserInfo`)
        .then(res => {
          console.log(res)
          this.setState({
           first_name: res.data.first_name,
          })
        })
    }

    handleClick(val) {
        axios.get(`https://itunes.apple.com/us/rss/topsongs/limit=50/json`)
        .then(res => {
            
          this.setState({
              hi:'hi'
          })
          console.log(res.data.feed.entry[0]['im:image'][2].label)
        })
       
      };

      handleInput = ({ target: { value } }) => {
        this.setState({
            ...this.state,
            input: value
        })
        console.log(this.state.input)
    }

    enterPressed = (event) => {
        let code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            //Do stuff in here
            console.log('button hit')
        } 
    }


render() {

    if(this.state.songData!==[]){
    return(
        <div className='app'>
        <PrimarySearchBarApp handleInput={this.handleInput} enterPressed={this.enterPressed}/>
            
            <div className='trending'>
                <div className='block'> <h1 className='words'>Trending Music</h1>  </div>
            </div>
            <Grid songData={this.state.songData}></Grid>
            <h1>{`Welcome ${this.state.first_name}!`}</h1>
            
           
        </div>
    )
    }
}
}
