
module.exports = {

    createPlaylist: async (req, res) => {
        const { userId, playlistName } = req.body;
        const db = req.app.get('db');
        let playlist = await db.create_playlist({ userId: userId, playlistName: playlistName })
        res.status(200).send( playlist )
    },

    createUser: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        let accountArr = await db.find_user({ username: username })
        if (accountArr.length >= 1) {
            return res.status(200).send({ message: 'Username already in use.' })
        } else {
            let newUser = db.create_acc({ username: username, password: password });
            res.status(200).send({ message: 'logged in', user: newUser, loggedIn: true })

        }
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const accountArr = await db.find_user({ username: username });

        if (!accountArr[0]) {
            return res.status(200).send({ message: 'Username not found.' });
        } else {
            if (accountArr[0].password === password) {
                req.session.user = {
                    banner_pic: accountArr[0].banner_pic,
                    bio: accountArr[0].bio,
                    birthday: accountArr[0].birthday,
                    email: accountArr[0].email,
                    first_name: accountArr[0].first_name,
                    id: accountArr[0].id,
                    last_name: accountArr[0].last_name,
                    location: accountArr[0].location,
                    password: accountArr[0].password,
                    profile_pic: accountArr[0].profile_pic,
                    username: accountArr[0].username,
                }
                res.status(200).send({ message: 'logged in', user: req.session.user, loggedIn: true })
            } else { return res.status(200).send({ message: 'Password does not match Username' }); }
        }
    },

    getUserInfo: async (req, res) => {
       res.status(200).send(req.session.user)
    },

    logout: async (req, res) => {
        req.session.destroy();
        res.status(200).send('logged out')
    },

    getPlaylist: async (req, res) => {
        let userId = req.session.user.id
        const db = req.app.get('db');
        const playlists = await db.find_playlists({ userId: userId });

        if (playlists){
        res.status(200).send({ playlists: playlists, message: 'playlists found'})
    } else { res.status(200).send({ message: 'You dont have any playlists'})}
    },

    deletePlaylist: async (req, res) => {
        const { playlist } = req.params
        const db = req.app.get('db');
        const playlistsUpdated = await db.delete_playlist({ playlist_name: playlist });
        res.status(200).send({ playlistUpdated: playlistsUpdated, message: 'playlist deleted'})
    }
    



}
