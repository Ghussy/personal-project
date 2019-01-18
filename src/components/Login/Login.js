import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUsername, updateProfilePic } from '../ducks/reducer';
import './Login.scss';
import Card from './Card';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoginInput from './LoginInput';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    async register() {
        const { username, password } = this.state
        let res = await axios.post('/create-user', { username: username, password: password })

        if (res.data.loggedIn) {
            this.props.updateUsername(res.data.user.username)
            this.props.updateProfilePic(res.data.user.profile_pic)
            this.props.history.push('/dashboard')
            console.log(res.data.message)
        } else { alert(res.data.message) }
    }

    async login() {
        const { username, password } = this.state
        const res = await axios.post('/login', { username: username, password: password })

        if (res.data.loggedIn) {
            this.props.updateUsername(res.data.user.username)
            this.props.updateProfilePic(res.data.user.profile_pic)
            this.props.history.push('/dashboard')
            console.log(res.data.message)
        } else { alert(res.data.message) }
    }

    handleUsername = ({ target: { value } }) => {
        this.setState({
            ...this.state,
            username: value
        })
    }

    handlePassword = ({ target: { value } }) => {
        this.setState({
            ...this.state,
            password: value
        })
    }


    render() {

        const { classes } = this.props;

        return (
            <div>
                <div className='login-container'>

                    <p>
                        
                        <LoginInput handleUsername={this.handleUsername} handlePassword={this.handlePassword}></LoginInput>

                    </p>
                    
                    <div className='button-container'>
                        <Button variant="outlined" color="primary" onClick={() => this.login()}>Login</Button>
                        <Button onClick={() => this.register()}> Register </Button>
                    </div>
                </div>
            </div>

        )

    }
}


export default withRouter(connect(null, { updateUsername, updateProfilePic })(Login))
