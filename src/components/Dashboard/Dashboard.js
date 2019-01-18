import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from './Grid'
import Grid2 from './Grid2'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           songData: []
        }
    }

    componentDidMount(){
       axios.get(`https://itunes.apple.com/us/rss/topsongs/limit=50/json`)
        .then(res => {
            
          this.setState({
              songData: res.data.feed.entry
          })
          console.log(this.state.songData)
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

    return(
        <div>
            <Grid songData={this.state.songData}></Grid>
            {/* <Grid2></Grid2> */}
            
            <h1>Dashboard</h1>
            <Button onClick={() => this.handleClick()} variant="contained">Click Me</Button>
            {/* <p>{this.state.songData}</p> */}
            
        </div>
    )

}
}
