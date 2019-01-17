import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           songData: {}
        }
    }

    handleClick(val) {
        axios.get(`https://itunes.apple.com/search?term=kendrick+lamar&limit=1`)
        .then(res => {
            
          this.setState({
              songData: res.data.results[0].trackName
          })
          console.log(this.state.songData)
        })
       
      };

render() {

    return(
        <div>
            <h1>Dashboard</h1>
            <Button onClick={() => this.handleClick()} variant="contained">Click Me</Button>
            {/* <p>{this.state.songData}</p> */}
        </div>
    )

}
}
