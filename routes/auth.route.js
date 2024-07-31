const router = require('express').Router()
const User = require('../models/User.model')
const CryptoJs = require('crypto-js')
const dotenv = require('dotenv')
dotenv.config()

//Register
router.post("/register", async (req, res) => {

    const newUSer = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })

    try {
        const savedUser = await newUSer.save()
        res.status(200).json(savedUser)
        console.log(savedUser)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user)
            return res.status(401).json("Wrong credentials!")

        const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SEC)
        const password = hashedPassword.toString(CryptoJs.enc.Utf8)

        if (password !== req.body.password)
            return res.status(401).json("Wrong credentials!")

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router