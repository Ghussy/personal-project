
module.exports = {

    createUser: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        let accountArr = await db.find_user({ username: username })
        if (accountArr.length >= 1) {
            return res.status(200).send({ message: 'Username already in use.' })
        } else {
            let newUser = db.create_acc({ username: username, password: password });
            res.status(200).send({ message: 'logged in', newUser: newUser, loggedIn: true })

        }
    },
    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');
        const accountArr = await db.find_user({ username: username });

        if (!accountArr[0]) {
            return res.status(200).send({ message: 'Username not found.' });
        } else {
            if (accountArr[0].password === password) 
                {
                let newUser = accountArr[0];
                res.status(200).send({ message: 'logged in',user: newUser, loggedIn: true })
                } else 
                { return res.status(200).send({ message: 'Password does not match Username' }); }
        }
    }

}
