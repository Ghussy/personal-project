const initialState = {
    username: {},
    id: {},
    profilePic: {}
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PROFILEPIC = 'UPDATE_PROFILEPIC'

export function updateUsername(username) {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

export function updateProfilePic(profilePic) {
    return {
        type: UPDATE_PROFILEPIC,
        payload: profilePic
    }
}


export default function reducer(state = initialState , action) {
  
    switch(action.type) {
        case UPDATE_USERNAME: {
            return Object.assign({}, state, { username: action.payload })
        }
        case UPDATE_PROFILEPIC: {
            return Object.assign({}, state, { profilePic: action.payload })
        }
            default: return Object.assign({}, state)
    }
}

