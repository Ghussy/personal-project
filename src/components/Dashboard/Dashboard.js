import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from './Grid'
import './Dashboard.scss'


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           songData: [],
           first_name: ''
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

render() {

    if(this.state.songData!==[]){
    return(
        <div className='app'>
            
            <div className='trending'>
                <div className='block'></div>
                <div className='words'>Trending Music</div>            
            </div>
            <Grid songData={this.state.songData}></Grid>
            <p>{`Welcome ${this.state.first_name}!`}</p>
            
           
        </div>
    )
    }
}
}
