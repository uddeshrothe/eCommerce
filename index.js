const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoute = require('./routes/user.router.js')
const authRoute = require('./routes/auth.route.js')
const productRoute = require('./routes/product.route.js')
const cartRoute = require('./routes/cart.route.js')
const orderRoute = require('./routes/order.route.js')
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection is Successful")).catch((err) => console.log(err))

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)
app.use('/api/order', orderRoute)
app.use('/api/cart', cartRoute)


app.listen(process.env.PORT || 4001, () => {
    console.log("Server is listening!")
})