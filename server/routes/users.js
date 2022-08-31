const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const verifyToken = require('../middleware/verifyToken')
const User = require('../models/User')
const Post = require('../models/Post')
const cloudinary = require('../utils/cloudinary')

// Get user
router.get('/', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')

        if (!user)
            return res
                .status(400)
                .json({ success: false, message: 'User not found' })

        res.json({
            success: true,
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

// Update user
router.put('/', verifyToken, async (req, res) => {
    const { username, email, password, profilePic } = req.body

    // Simple validation
    if (!profilePic)
        return res
            .status(400)
            .json({ success: false, message: 'Missing profile picture' })
    else if (!username)
        return res
            .status(400)
            .json({ success: false, message: 'Missing username' })
    else if (!email)
        return res
            .status(400)
            .json({ success: false, message: 'Missing email' })

    try {
        let updatedUser = {
            profilePic,
            username,
            email,
        }

        const hashedPass = password && (await argon2.hash(password))
        if (hashedPass) updatedUser.password = hashedPass

        updatedUser = await User.findByIdAndUpdate(req.userId, updatedUser, {
            new: true,
        }).select('-password')

        res.json({
            success: true,
            message: 'User updated successfully',
            user: updatedUser,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})

// Delete user
router.delete('/', verifyToken, async (req, res) => {
    try {
        // Delete posts' photos on cloudinary belong to user
        const posts = await Post.find({ user: req.userId })
        posts.forEach(async post => {
            if (post.photo.publicId)
                await cloudinary.uploader.destroy(post.photo.publicId)
        })

        // Delete posts belong to user
        await Post.deleteMany({ user: req.userId })

        // Delete user
        await User.findByIdAndDelete(req.userId)

        res.json({
            success: true,
            message: 'User deleted successfully',
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
