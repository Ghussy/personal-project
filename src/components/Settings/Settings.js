import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUsername } from '../ducks/reducer';
import InputFields from './InputFields'
// import Dropzone from 'react-dropzone'
import Chips from './GenreChips'
import Chips2 from './Chips'
import axios from 'axios'
import PrimarySearchBarApp from '../Appbar/Appbar';
import UploadButton from './UploadButton';



class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genreList: [],
            firstName: '',
            lastName: '',
            email: '',
            bio: '',
            gender: '',
            banner_url: '',
            profile_pic: ''
        }
    }

    async componentDidMount(){
        await axios.get(`/getUserInfo`)
         .then(res => {
           console.log(res)
         })
     }

     updateInfo = async() => {
         console.log('button hit')
         console.log(this.state)
        let res = await axios.post(`/update-info`, {
            genreList: this.state.genreList,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            bio: this.state.bio,
            gender: this.state.gender,
            banner_url: this.state.banner_url,
            profile_pic: this.state.profile_pic
        })

        if (res.data.updatedInfo){

            alert(res.data.message)
            console.log(res.data.updatedInfo)
        }

    }



    onDrop = (acceptedFiles, rejectedFiles) => {
        console.log(acceptedFiles)
    }

    chipClick = (genre) => {
        let array = this.state.genreList
        if (array.length < 5) {
            this.setState({
                genreList: [...array, { key: array.length, label: genre }]
            })
        } else {
            alert('remove genres')
        }
    }

    chipDelete = (i) => {
         this.state.genreList.splice(i, 1)
       
    }

    handleFirstName = (name) => {

        this.setState({
            firstName: name
        })
        console.log(name)
    }

    handleLastName = (name) => {

        this.setState({
            lastName: name
        })
        console.log(name)
    }
    
    handleEmail = (name) => {
        this.setState({
            email: name
        })
        console.log(name)
    }

    handleBio = (name) => {

        this.setState({
            bio: name
        })
        console.log(name)
    }

    handleGender = (name) => {

        this.setState({
            gender: name
        })
        console.log(name)
    }

    handleBanner = (name) => {

        this.setState({
            banner_url: name
        })
        console.log(name)
    }

    handleProfilePic = (name) => {
        this.setState({
            profile_pic: name
        })
        console.log(name)
    }



    render() {
        console.log(this.state.genreList)
        return (
            <>
                <PrimarySearchBarApp/>
                
                <InputFields
                    handleFirstName={this.handleFirstName}
                    handleLastName ={this.handleLastName}
                    handleEmail ={ this.handleEmail }     
                    handleBio = { this.handleBio }   
                    handleGender = { this.handleGender }
                    handleBanner = { this.handleBanner }
                    handleProfilePic = {this.handleProfilePic}
                            />
                <Chips2 array={this.state.genreList} chipDelete={this.chipDelete}/>
                <Chips chipClick={this.chipClick} />
                <div className='drop'>
                    {/* <Dropzone onDrop={this.onDrop}>
                        {({ getRootProps, getInputProps, isDragActive }) => {
                            return (
                                <div
                                    {...getRootProps()}
                                    className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
                                >
                                    <input {...getInputProps()} />
                                    {
                                        isDragActive ?
                                            <p>Drop files here...</p> :
                                            <p>Try dropping some files here, or click to select files to upload.</p>
                                    }
                                </div>
                            )
                        }}
                    </Dropzone> */}
                   <UploadButton updateInfo={()=>this.updateInfo()} />
                
                </div>
            </>
        )
    }


}

function mapStateToProps(store) {
    const { username } = store
    console.log(username)
}


export default connect(mapStateToProps, { updateUsername })(Settings)