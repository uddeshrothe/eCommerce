const router = require('express').Router()

router.get('/usertest', (req, res) => {
    res.send("User test is Successful!")
})

router.post('/userposttest', (req, res) => {
    const username = req.body.username
    res.send(`Your username is: ${username}`)
    console.log(username)
})

module.exports = router