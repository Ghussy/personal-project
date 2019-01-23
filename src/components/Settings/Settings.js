import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUsername } from '../ducks/reducer';
import InputFields from './InputFields'
import classNames from 'classnames'
import Dropzone from 'react-dropzone'
import Chips from './GenreChips'
import Chips2 from './Chips'
import axios from 'axios'

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genreList: [],
            firstName: ''
        }
    }

    async componentDidMount(){
        await axios.get(`/getUserInfo`)
         .then(res => {
           console.log(res)
         })
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

    render() {
        console.log(this.state.genreList)
        return (
            <>
                <h1>Settings</h1>
                <InputFields handleFirstName={this.handleFirstName} />
                <Chips2 array={this.state.genreList} chipDelete={this.chipDelete}/>
                <Chips chipClick={this.chipClick} />
                <div className='drop'>
                    <Dropzone onDrop={this.onDrop}>
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
                    </Dropzone>
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