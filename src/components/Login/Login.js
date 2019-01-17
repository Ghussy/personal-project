import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUsername, updateProfilePic } from '../ducks/reducer'
import './Login.scss'


import LoginInput from './LoginInput'


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
       let res = await axios.post('/create-user', {username: username, password: password})
       
       if (res.data.loggedIn) {
        this.props.updateUsername(res.data.user.username)
        this.props.updateProfilePic(res.data.user.profile_pic)
           this.props.history.push('/dashboard')
           console.log(res.data.message)
       } else{ alert( res.data.message ) }
   }

   async login() {
       const { username, password } = this.state
       const res = await axios.post('/login', { username: username, password: password})
      
        if (res.data.loggedIn) {
            this.props.updateUsername(res.data.user.username)
            this.props.updateProfilePic(res.data.user.profile_pic)
            this.props.history.push('/dashboard')
            console.log(res.data.message)
        } else{ alert(res.data.message)}
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


    return(
        <div>
            <div className='login-container'>
            <h1>Login</h1>
            <p>
                    {/* <span>Username: </span>
                    <input onChange={(e) => this.setState({ username: e.target.value })} type='text' /> */}
                   <LoginInput handleUsername = {this.handleUsername} handlePassword= {this.handlePassword}></LoginInput>
       
                </p>
                <p>
                    {/* <span>password: </span>
                    <input onChange={(e) => this.setState({ password: e.target.value })} type='text' /> */}
                </p>
            <button onClick={() => this.login()}>Login</button>
            <button onClick={() => this.register()}> Register </button>
            </div>
        </div>
        
    )

}
}


export default connect(null, {updateUsername, updateProfilePic})(Login)
