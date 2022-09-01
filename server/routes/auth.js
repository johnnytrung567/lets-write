const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body

    // Simple validation
    if (!username)
        return res
            .status(400)
            .json({ success: false, message: 'Missing username' })
    else if (!email)
        return res
            .status(400)
            .json({ success: false, message: 'Missing email' })
    else if (!password)
        return res
            .status(400)
            .json({ success: false, message: 'Missing password' })

    try {
        // Check for existing username
        const usernameCheckUser = await User.findOne({ username })
        if (usernameCheckUser)
            return res
                .status(400)
                .json({ success: false, message: 'Username already taken' })

        // Check for existing email
        const emailCheckUser = await User.findOne({ email })
        if (emailCheckUser)
            return res
                .status(400)
                .json({ success: false, message: 'Email already used' })

        // All good
        const hashedPass = await argon2.hash(password)

        const newUser = new User({
            username,
            email,
            password: hashedPass,
        })

        await newUser.save()

        // Return access token
        const token = jwt.sign(
            { userId: newUser._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '7d' }
        )

        res.json({
            success: true,
            message: 'User registered successfully',
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body

    // Simple validation
    if (!email || !password)
        return res
            .status(400)
            .json({ success: false, message: 'Missing email and/or password' })

    try {
        // Check for existing user
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({
                success: false,
                message: 'Incorrect email or password',
            })

        // Check valid password
        const passwordValid = await argon2.verify(user.password, password)
        if (!passwordValid)
            return res.status(400).json({
                success: false,
                message: 'Incorrect email or password',
            })

        // All good
        // Return access token
        const token = jwt.sign(
            { userId: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '7d' }
        )

        res.json({
            success: true,
            message: 'User logged in successfully',
            token,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

module.exports = router
