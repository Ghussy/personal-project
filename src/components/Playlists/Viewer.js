import React, { Component } from 'react';
import Table from './Table'
import axios from 'axios'

export default class Viewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlistName: 'login to see playlists',
            songs: []
        }
    }

    componentDidMount = async() => {
        if (this.props.location.state) {
        
               await this.setState({
                    playlistName: this.props.location.state.playlistName
                }) 
        let songs = await axios.post('/get-songs', { playlistName: this.state.playlistName })
       
                this.setState({
                    songs: songs.data.songList
                })
        }
        console.log(this.state.songs)
    }


    render() {

        const songs = this.state.songs.map((e)=>{
         return(   <li>
                <p>{e.track_name}</p>
            </li>
         )
        })
       
     
        return (
          <>
          <h1>{this.state.playlistName}</h1>
          <ul>
              {songs}
          </ul>
          </>
        );
      }
}