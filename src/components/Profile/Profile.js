import React, { Component } from 'react';
import Avatar from './Avatar'
import Dots from './Dots'
import Tile1 from './Tile1'
import Tile2 from './Tile2'
import Chip from './Chip';
import './Profile.scss'
import Player from './Player'
import axios from 'axios'
import PrimarySearchBarApp from '../Appbar/Appbar'
import { array } from 'prop-types';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
            genrelist: ["rock", "Hip-Hop", 'Metal', 'EDM', 'Pop'],
            banner_pic: '',
            birthday: '',
            first_name: '',
            last_name: '',
            location: '',
            username: '',
            bio: ''
        }
    }

    async componentDidMount(){
        await axios.get(`/getUserInfo`)
         .then(res => {
           console.log(res)
           this.setState({
            image: res.data.profile_pic,
            banner_pic: res.data.banner_pic,
            birthday: res.data.birthday,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            location: res.data.location,
            username: res.data.username,
            bio: res.data.bio
           })
         })
     }



    render() {

        const chips = this.state.genrelist.map(
            (genre) => {
                return <Chip label={genre} />
            }
        )

        return (
            
            <div className='page'>
            <PrimarySearchBarApp/>
                <div className="banner"><img src={this.state.banner_pic} className="banner2"/></div>
                <div className='avatar'>
                    <Avatar imgg={this.state.image} />
                </div>
                <div className='header'>
                    <div className='dots'>
                        <Dots />
                    </div>
                </div>
                <div className='bottom'>
                    <div className='tile1'>
                        <Tile1 username={this.state.username} bio={this.state.bio} 
                        birthday={this.state.birthday} location={this.state.location}
                         first_name={this.state.first_name} last_name={this.state.last_name}/>
                    </div>
                    <div className='chips'>
                        {chips}
                        <Player/>
                    </div>
                    <div className='tile2'>
                        <Tile2 />
                    </div>
                </div>

            </div>
        )
    }


}