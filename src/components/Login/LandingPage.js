import React, { Component } from 'react';
import Card from './Card'
import './LandingPage.scss'
import Alert from './Alert'

export default class LandingPage extends Component {


    render() {

        return (
            <>
                <h1>LandingPage</h1>
                <div className='mid-page'>
                    <div className='side-column' />
                    <Alert/>
                    <div className='side-column' />
                </div>
            </>
        )
    }


}