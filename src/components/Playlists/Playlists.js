import React, { Component } from 'react';
import axios from 'axios';
import Alert from './Alert';
import Card from './Card'
import './Playlists.scss'
import Loading from './Loading'
import PrimarySearchBarApp from '../Appbar/Appbar'

export default class Playlists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            playlists: [],
            playlistName: '',
            playlistDelete: '',
            load: 'no',
            selectedPlaylist: ''
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
                playlists: res.data.playlists,
                load: 'yes'
            })
            console.log(res.data.message)
            console.log(this.state.playlists)
        })
     }

     createPlaylist = async () => {
         const { userId, playlistName } = this.state
         let res = await axios.post('/create-playlist', { userId: userId, playlistName: playlistName })
         this.setState({
            playlistName: ''
        })
         if (res.data) {
             alert('playlist succesfully created')
             console.log(res.data[0])
             const old = this.state.playlists
             const playlist = res.data[0]
             this.setState({
                playlists: [ ...old, playlist ]
             })
         } else { alert('error creating playlist')}
        
     }

     deletePlaylist = async (name) => {
        let res = await axios.delete(`/delete/${name}`)

        if(res.data.playlistUpdated !== this.state.playlists) {
            console.log(res.mesage)
            console.log(res.playlistUpdated)
            this.setState({
                playlists: res.data.playlistUpdated,
                playlistDelete: ''
            })
        } else {
            alert('error deleting playlist')
        }
     }

     handleCardClick = (name) => {
         console.log(`${name} card clicked`)
         this.setState({
             selectedPlaylist: name
         })
     }
    

     handleInput = (name) => {

        this.setState({
            playlistName: name
        })
        
    }

    render() {

        console.log(this.state.playlists)
    //     this.state.playlists.forEach(element =>{
    //         let name = element.playlist_name
    //     })
    const results = this.state.playlists.map((e)=>{
        let playlistName = e.playlist_name
        return <Card deletePlaylist={this.deletePlaylist} handleCardClick={this.handleCardClick} playlistName={playlistName}></Card>
    }
    )

    if (this.state.load === 'no'){
        return (
            
            <div>
            <PrimarySearchBarApp/>    
            <h1>Please Wait</h1>
            <Loading></Loading>
            </div>
        )
            } else {
        return (
            <>
            <PrimarySearchBarApp/>
                <h1>Playlists</h1>
                <Alert input={this.state.playlistName} handleInput={this.handleInput} createPlaylist={this.createPlaylist} />
                <div className="playlists">
                <div className='content-container'>
                    <div className='side-banner'/>
                    <div className='results'>{results}</div>
                    <div className='side-banner'/>
                </div>
                </div>
            </>
        )}
    }


}