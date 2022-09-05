require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const categoryRouter = require('./routes/categories')

const app = express()

app.use(cors())
app.use(express.json({ limit: '1mb' }))

const connectDB = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.p6grt.mongodb.net/lets-write?retryWrites=true&w=majority`
    )
    console.log('MongoDB connected')
}

connectDB()

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/categories', categoryRouter)

const port = process.env.PORT || 5000

app.listen(port, () =>
    console.log(`Server is running at http://localhost:${port}`)
)
