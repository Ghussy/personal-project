
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
    },

    saveSong: async (req, res) => {
        let userId = req.session.user.id
        const { trackName, artistName, artworkUrl100, collectionName, trackId, previewUrl, genre, playlists } = req.body;
        const db = req.app.get('db');
        const playlistId = await db.search_playlist({ playlist: playlists})
        const newSong = await db.create_song({
             trackId: trackId,
              userId: userId,
               artistName: artistName,
               collectionName: collectionName,
               trackName: trackName,
               artworkUrl100: artworkUrl100,
               genre: genre,
               playlistId: playlistId[0].id,
               previewUrl: previewUrl 
            })
           
        res.status(200).send({ message: 'song added', song: newSong })
    },

    getSongs: async (req, res) => {
        let UserId = req.session.user.id
        const { playlistName } = req.body;
        console.log(playlistName)
        const db = req.app.get('db');
        const playlistId = await db.search_playlist({ playlist: playlistName})
        console.log(playlistId[0])
        const songList = await db.get_songs({ playlistId: playlistId[0].id })
        res.status(200).send({ songList: songList })
    }

    



}
