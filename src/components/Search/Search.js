import React, { Component } from 'react';
import Youtube from '../Youtube/Youtube'
import youtubeSearch from "youtube-search";
import searchYoutube from 'youtube-api-v3-search';
import Input from './Input'
import axios from 'axios';
import Song from './Song'
import './Search.scss'
import SearchButton from './SearchButton'
import Menu from './Menu'
import Alert from './Alert'

const { REACT_APP_API_KEY } = process.env;
const $YOUTUBE_KEY = REACT_APP_API_KEY;

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            input2: '',
            videoId: '',
            response: [],
            songList: [],
            intervalId: 0,
            userId: '',
            playlists: []
        }
    }

    async componentDidMount(){
        await axios.get(`/getUserInfo`)
         .then(res => {
           this.setState({
            userId: res.data.id,
           })
         })
        await axios.get(`/getPlaylist`)
        .then(res => {
            this.setState({
                playlists: res.data.playlists
            })
            console.log(res.data.message)
            console.log(this.state.playlists)
        })
    }
 
    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }
      
      scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
        this.setState({ intervalId: intervalId });
      }
      
    

     handleClick = async() => {
        await axios.get(`https://itunes.apple.com/search?term=${this.state.input2}&limit=25`)
        .then(res => {
            
          this.setState({
              input2:'',
              input:'',
              response: res.data.results,
              
          })
          console.log(res.data.results)
        })
       
      };

      handleInput2 = ({ target: { value } }) => {
          let replaced = value.split(' ').join('+');
        this.setState({
            ...this.state,
            input2: replaced
        })
    }

    search =  async (input) => {

        const options = {
            q: input
        }

        let result = await searchYoutube($YOUTUBE_KEY, options)
        this.setState({ videoId: result.items[0].id.videoId })
        
    }


    handlePlay = (input, input2) => {
        const search = input2 + ' ' + input
        this.setState({
            input: input
        })
        this.search(search)
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
        let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
        this.setState({ intervalId: intervalId });
    }

    saveSong = async(trackName, artistName, artworkUrl100, collectionName, trackId, previewUrl, genre, playlists) => {
        // return console.log(trackName, artistName, artworkUrl100, collectionName, trackId, previewUrl, genre, playlists)
        let res = await axios.post(`/save-song`, {
            trackName: trackName,
            artistName: artistName,
            artworkUrl100: artworkUrl100,
            collectionName: collectionName,
            trackId: trackId,
            previewUrl: previewUrl,
            genre: genre,
            playlists: playlists
        })

        if (res.data.song){

            alert(res.data.message)
            console.log(res.data.song)
        }

    }


    

    render() {

        this.state.response.forEach(element => {
          let song = {
          title: element.trackName,
          artist: element.artistName,
          artworkUrl100: element.artworkUrl100,
          collectionName: element.collectionName,
          trackId: element.trackId,
          previewUrl: element.previewUrl,
          genre: element.primaryGenreName
          }
          this.state.songList.push(song)
        });
        const results = this.state.songList.map(
            (song) => {

                return <Song 
                playlists={this.state.playlists}
                saveSong={this.saveSong}
                 handlePlay={this.handlePlay}
                  trackName={song.title}
                   artistName={song.artist}
                    artworkUrl100={song.artworkUrl100}
                    collectionName={song.collectionName}
                    trackId={song.trackId}
                    previewUrl={song.previewUrl}
                    genre={song.genre}
                     />
                
            }
        )


        if (this.state.videoId === ''){
            return (
                <>  <div className='searchbar'>
                    <Input handleInput2={this.handleInput2}/>
                    <SearchButton handleClick={this.handleClick}/>
                    </div>
                
                    <div className='results'>{results}</div>
                    
    
                </>
            )
        }
        return (
            <>
                
                
                <Youtube videoId={this.state.videoId} />
                {results}
                

            </>
        )
    }


}
