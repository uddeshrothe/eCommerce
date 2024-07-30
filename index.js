const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoute = require('./routes/user.router.js')
const authRoute = require('./routes/auth.route.js')
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection is Successful")).catch((err) => console.log(err))

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

app.listen(process.env.PORT || 4001, () => {
    console.log("Server is listening!")
})