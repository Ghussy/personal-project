import React, { Component } from 'react';
import './LandingPage.scss'
import Alert from './Alert'
import Logo from '../Login/Logo.svg'

export default class LandingPage extends Component {

    render() {

        return (
            <div>
            <div className='header2'>
                <img src={Logo} className='Logo'></img>
                <div className='mid-page'>
                    <div className='side-column' />
                    <Alert/>
                    <div className='side-column' />
                </div>

            </div>
            <div>
                <img className='pic' src='https://images.unsplash.com/photo-1529176601319-48a49e19725c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'></img>
                
            </div>
           </div> 
        )
    }


}